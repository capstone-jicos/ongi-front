<template>
    <section class = "section">
        <div class="container pt-lg-md my-10 text-center mt-5">
            <p>모임 참가신청 요청이 되었습니다</p>
            <router-link to="/event">
              <base-button>홈으로</base-button>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
  name: "requestConfirm",
  data: function() {
    return {};
  },
  created() {
    this.$emit("onNavColorChange", "black");
  }
};
</script>

<style>
</style>
