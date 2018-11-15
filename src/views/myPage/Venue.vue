<template>
  <section class="section">
    <div class="container my-5 text-center">
      <h2>등록한 주소 보기</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "Venue",
  created() {
    this.$emit("onNavColorChange", "black");
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/bootstrap/functions";
@import "../../assets/scss/custom/variables";
</style>
