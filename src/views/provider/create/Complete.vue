<template>
  <section class="section">
    <div class="container">
      <div class="text-center">
        <i class="xi-check-circle xi-2x"></i>
        <p>장소 등록 신청이 완료되었습니다!</p>
        <p>승인이 되면, 이메일로 알림으로 드리겠습니다</p>
        <router-link to="/">
          <base-button>홈으로</base-button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Complete"
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
