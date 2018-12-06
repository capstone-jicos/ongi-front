<template>
  <div>
    <fade-transition origin="center" mode="out-in" :duration="250">
      <router-view @onValueChange="onValueChange"></router-view>
    </fade-transition>
    <Footer @onBackButton="onBackButton"
            @onNextButton="onNextButton"
            :final="final"
    ></Footer>
  </div>
</template>

<script>
import Footer from "./Footer";
import { FadeTransition } from "vue2-transitions";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("createVenue");

export default {
  name: "Index",
  components: {
    FadeTransition,
    Footer
  },
  methods: {
    ...mapGetters(["getResponse"]),
    onBackButton() {
      if (this.index >= 1) {
        this.$router.push(`./${this.route[this.index - 1]}`);
      } else {
        if (
          window.confirm(
            "신청을 종료하시나요?\n입력하신 내용은 접속하시는 동안 저장되어 있습니다."
          )
        )
          this.$router.push("../");
      }
    },
    onNextButton: function() {
      if (!this.final) {
        this.$router.push(`./${this.route[this.index + 1]}`);
      } else {
        let responseState = this.getResponse();
        let payload = {
          type: responseState.type,
          accomodate: responseState.capacity,
          country: responseState.location.country,
          state: responseState.location.state,
          city: responseState.location.city,
          detail: responseState.location.detailAddress,
          lat: responseState.location.coordinates.lat,
          lng: responseState.location.coordinates.lng,
          amenities: encodeURIComponent(
            JSON.stringify(responseState.amenities)
          ),
          photoUrl: responseState.photoUrl,
          name: responseState.name,
          rules: encodeURIComponent(JSON.stringify(responseState.restrictions)),
          fee: responseState.fee
        };

        this.$axios
          .post("/venue/create", payload, { withCredentials: true })
          .then(response => {
            if (response.data.errors !== undefined) {
              console.log(response.data.errors);
            } else {
              this.$router.push(`./${this.route[this.index + 1]}`);
            }
          });
      }
    },
    onValueChange(payload) {
      let keys = Object.keys(payload);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        this.response[key] = payload[key];
      }
    }
  },
  data() {
    return {
      route: [
        "type",
        "capacity",
        "basic-info",
        "amenity",
        "photos",
        "name",
        "requirements",
        "confirm-process",
        "restrictions",
        "experience",
        "fee",
        "regulations",
        "response-confirm",
        "complete"
      ]
    };
  },
  created() {
    this.$emit("onNavColorChange", "black");
  },
  computed: {
    final() {
      return this.index === this.route.length - 2;
    },
    index() {
      let pattern = /.*\/(.*)/;
      let pathResult = pattern.exec(this.$route.path);
      return this.route.indexOf(pathResult[1]);
    }
  }
};
</script>

<style scoped>
</style>
