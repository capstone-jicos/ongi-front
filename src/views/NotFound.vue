<template>
  <section class="section">
    <div class="container">
      <div class="mx-auto text-center">
        <i class="xi-minus-circle-o"></i>
        <div class="my-3 h5">요청한 페이지를 찾을 수 없습니다.</div>
        <router-link to="/">
          <base-button>홈으로 가기</base-button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  created() {
    this.$emit("onNavColorChange", "black");
  }
};
</script>

<style scoped lang="scss">
div.container {
  i {
    font-size: 2.5rem;
  }
}
</style>
