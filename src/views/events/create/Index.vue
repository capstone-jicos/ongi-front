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
import { isFormBlank } from "../../../script/common";
import { FadeTransition } from "vue2-transitions";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("createEvent");

export default {
  name: "Index",
  components: {
    FadeTransition,
    Footer
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"]),
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
        };
        this.$axios
          .post("/event/create", payload, { withCredentials: true })
          .then(response => {
            this.event.idx = response.data[0].idx;
            if (response.data.errors === undefined) {
              let event = {
                idx: response.data[0].idx
              };
              this.setPartialResponse(event);
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
      route: ["baseinfo", "food", "middlecheck", "setvenue"],
      event: {
        idx: null
      }
    };
  },
  created() {
    this.$emit("onNavColorChange", "black");
    let idx = this.getResponse().idx;

    if (idx !== undefined) {
      this.event.idx = idx;
    }
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
