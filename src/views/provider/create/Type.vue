<template>
  <section class="section">
    <div class="container">
      <h4>회원님의 부엌은 어떤 형태인가요?</h4>
      <base-radio name="store"
                  class="mb-2"
                  v-model="response.type"
      >가게</base-radio>
      <base-radio name="apartment"
                  class="mb-2"
                  v-model="response.type"
      >아파트</base-radio>
      <base-radio name="independent"
                  class="mb-2"
                  v-model="response.type"
      >단독주택</base-radio>
      <base-radio name="studio"
                  class="mb-2"
                  v-model="response.type"
      >쿠킹 스튜디오</base-radio>    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("createVenue");

export default {
  name: "Type",
  data() {
    return {
      response: {
        type: null
      }
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"])
  },
  watch: {
    type() {
      this.setPartialResponse(this.response);
    }
  },
  computed: {
    type() {
      return this.response.type;
    }
  },
  created() {
    this.response.type = this.getResponse().type;
  }
};
</script>

<style scoped lang="scss">
</style>
