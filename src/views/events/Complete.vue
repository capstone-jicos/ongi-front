<template>
    <section class="section">
        <div class="container">
            <div class="text-center">
                <i class="xi-check-circle xi-2x"></i>
                <p>참가신청이 완료되었습니다!</p>
                <base-button @click="openReceipt">영수증 보기</base-button>
                <router-link to="/">
                    <base-button>홈으로</base-button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "EventJoinComplete",
  created() {
    this.$emit("onNavColorChange", "black");
  },
  methods: {
    openReceipt() {
      let url = this.$route.query.receipt_url.concat("&type=0");
      window.open(url);
    }
  }
};
</script>

<style scoped lang="scss">
div.container {
  div {
    font-size: 3rem;

    i {
      color: green;
    }
  }
}
</style>
