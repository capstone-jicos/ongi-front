<template>
    <section class = "section">
        <div class="container pt-lg-md my-10 text-center mt-5">
            <p>모임이 생성되었습니다</p>
        </div>
    </section>
</template>

<script>
export default {
  name: "confirm",
  data() {
    return {};
  },
  created() {
    this.$emit("onNavColorChange", "black");
  }
};
</script>

<style>
</style>
