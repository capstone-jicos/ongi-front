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

export default {
  name: "Index",
  components: {
    FadeTransition,
    Footer
  },
  methods: {
    onBackButton() {
      if (this.index >= 1) {
        this.$router.push(`./${this.route[--this.index]}`);
      } else {
        // TODO 초기화면으로 넘어가는 것을 경고
      }
    },
    onNextButton() {
      this.$router.push(`./${this.route[++this.index]}`);
    },
    onValueChange(payload) {
      let keys = Object.keys(zpayload);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        this.response[key] = payload[key];
      }
    }
  },
  data() {
    return {
      route: ["baseinfo", "food", "middlecheck", "setvenue", "confirm"],
      index: 0
    };
  },
  created() {
    let pattern = /.*\/(.*)/;
    let pathResult = pattern.exec(this.$route.path);
    this.index = this.route.indexOf(pathResult[1]);

    this.$emit("onNavColorChange", "black");
  },
  computed: {
    final() {
      return this.index === this.route.length - 2;
    }
  }
};
</script>

<style scoped>
</style>
