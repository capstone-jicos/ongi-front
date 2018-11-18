<template>
    <section class = "section">
        <div class="container pt-lg-md my-10 text-center mt-5">
            <p>모임이 생성되었습니다</p>
            <router-link to="/">
            <base-button>홈으로</base-button>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
  name: "confirm",
  data() {
    return {
    };
  },
  created() {
    this.$emit("onNavColorChange", "black");
  }
};
</script>

<style>
</style>
