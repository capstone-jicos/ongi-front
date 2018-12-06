<template>
  <div id="attend" class="row mx-0">
    <div class="col text-center my-auto">
      {{ feeWithComma }}원
    </div>
    <div class="col text-center my-auto">
      <router-link :to="getUrl()">
        <base-button type="neutral" variant="primary">참가신청</base-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "RequestFooter",
  props: {
    feeWithComma: {
      type: String,
      default: "0",
      description: "이벤트 참가비"
    }
  },
  created() {},
  methods: {
    getUrl() {
      return `/event/${this.$route.params.id}/request`;
    }
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
