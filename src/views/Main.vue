<template>
  <section class="section pb-0">
    <router-link to="/event">
      <div class="role-splitter" id="guest" ></div>
    </router-link>
    <router-link to="">
      <div class="role-splitter" id="host"></div>
    </router-link>
    <router-link to="">
      <div class="role-splitter" id="provider"></div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "Main",
  created() {
    this.$emit("onNavColorChange", "black");
  }
};
</script>
<style scoped lang="scss">
section {
  height: 100vh;
  div.role-splitter {
    height: 33.3%;
    div.role-description {
      z-index: 20;
      height: 100%;
    }
  }

  div#guest {
    /*background-color: #f4cc70;*/
    background-image: url("/img/guest_font.png");
    background-size: cover;
  }

  div#host {
    background-image: url("/img/host_font.png");
    background-size: cover;
  }

  div#provider {
    background-image: url("/img/provider_font.png");
    background-size: cover;
  }
}
</style>
