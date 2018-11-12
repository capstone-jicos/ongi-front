<template>
  <section class="section">
    <div class="container my-5 text-center">
      <h2>참가한 모임 보기</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "Attended",
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
