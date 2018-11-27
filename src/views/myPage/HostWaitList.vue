<template>
  <div id="attend" class="row mx-0">
    <div class="col text-center my-auto">
      <!-- <router-link to="/event/request"> -->
        <base-button type="neutral" variant="primary">수락</base-button>
      <!-- </router-link> -->
    </div>
    <div class="col text-center my-auto">
      <!-- <router-link to="/event/request"> -->
        <base-button type="neutral" variant="primary">거절</base-button>
      <!-- </router-link> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "HostWaitList",
  props: {
  }
};
</script>
<style scoped lang="scss">
#attend {
  width: 100vw;
  height: 65px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 -15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  z-index: 100;
}

button[variant="primary"] {
  padding-right: 3rem;
  padding-left: 3rem;
}
</style>
