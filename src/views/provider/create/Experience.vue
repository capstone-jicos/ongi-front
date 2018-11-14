<template>
  <section class="section">
    <div class="container">
      <h5>이전에 모임을 주최해보신 적이 있나요?</h5>
      <label>Airbnb, Meetup 등 어떤 형태든 상관없습니다.</label>
      <base-radio name="yes"
                  class="mb-2"
                  v-model="response.experience"
      >예</base-radio>
      <base-radio name="no"
                  class="mb-2"
                  v-model="response.experience"
      >아니오</base-radio>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      response: {
        experience: null
      }
    };
  }
};
</script>

<style scoped>
</style>
