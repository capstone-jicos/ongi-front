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
import { isFormBlank } from "../../../script/common";
const { mapGetters } = createNamespacedHelpers("createEvent");

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
    onNextButton() {
      if (!this.final) {
        let currentResponse = this.$children[0].$children[0].event;
        let blankKey;

        if (
          currentResponse !== undefined &&
          (blankKey = isFormBlank(currentResponse))
        ) {
          this.$children[0].$children[0].event[blankKey] = "";
          return false;
        }

        this.$router.push(`./${this.route[this.index + 1]}`);
      } else {
        let eventState = this.getResponse();
        let payload = {
          title: eventState.title,
          description: eventState.description,
          fee: eventState.feeAmount,
          photoUrl: eventState.photo,
          seats: eventState.seats,
          startDate: eventState.startDate,
          endDate: eventState.endDate,
          type: encodeURIComponent(JSON.stringify(eventState.type))
          //venueId:1//이거값 때려박음 고쳐야함,
        };
        this.$axios
          .post("/event/create", payload, { withCredentials: true })
          .then(response => {
            if (response.data.errors === undefined) {
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
      route: ["baseinfo", "food", "middlecheck", "setvenue"]
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
