<template>
    <section class = "section">
        <div class="container pt-lg-md my-10 text-center mt-5">
            <p>장소 대여신청 요청이 되었습니다</p>
            <router-link to="/venue">
            <base-button>홈으로</base-button>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
  name: "Confirm",
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
