<template>
    <div id="app">
        <router-view name="header" :navColor="navColor"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view @onNavColorChange="onNavColorChange"/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  },
  data() {
    return {
      navColor: undefined
    };
  },
  methods: {
    onNavColorChange(color) {
      this.navColor = color;
    }
  }
};
</script>
