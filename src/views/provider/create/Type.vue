<template>
  <section class="section">
    <div class="container">
      <h4>회원님의 부엌은 어떤 형태인가요?</h4>
      <base-radio name="store"
                  class="mb-2"
                  v-model="radioGroup.type"
                  @input="onValueChange"
      >가게</base-radio>
      <base-radio name="apartment"
                  class="mb-2"
                  v-model="radioGroup.type"
                  @input="onValueChange"
      >아파트</base-radio>
      <base-radio name="independent"
                  class="mb-2"
                  v-model="radioGroup.type"
                  @input="onValueChange"
      >단독주택</base-radio>
      <base-radio name="studio"
                  class="mb-2"
                  v-model="radioGroup.type"
                  @input="onValueChange"
      >쿠킹 스튜디오</base-radio>
    </div>
  </section>
</template>

<script>
export default {
  // TODO Vuex를 적용해서 만들어야함
  name: "Type",
  data() {
    return {
      radioGroup: {
        type: null
      }
    };
  },
  methods: {
    onValueChange() {
      let type = this.radioGroup;
      this.$emit("onValueChange", type);
      return type;
    }
  }
};
</script>

<style scoped>
</style>
