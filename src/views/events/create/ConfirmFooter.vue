<template>
    <section class = "section">
        <div class="container pt-lg-md my-10 text-center mt-5">
            <router-link to="/">
            <base-button>홈으로</base-button>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
  name: "ConfirmFooter",
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
