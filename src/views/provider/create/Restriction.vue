<template>
  <section class="section">
    <div class="container">
      <h4>부엌을 사용하면서 유의해야할<br/>점들을 알려주세요</h4>
      <base-checkbox class="mb-3"
                     v-model="checkboxes.noIndividual"
                     >개인 행동 금지</base-checkbox>
      <base-checkbox class="mb-3"
                     v-model="checkboxes.noTrespass"
                     >타 공간 무단침입 금지</base-checkbox>
    </div>
  </section>
</template>

<script>
// TODO Vuex 붙여놔야함
export default {
  name: "Restriction",
  data() {
    return {
      response: {
        restrictions: []
      },
      checkboxes: {
        noIndividual: false,
        noTrespass: false
      }
    };
  },
  watch: {
    checkboxes: {
      handler: function(newValue) {
        let restrictions = [];
        let keys = Object.keys(newValue);
        for (let i = 0; i < keys.length; i++) {
          if (this.checkboxes[keys[i]] === true) {
            restrictions.push(this.checkboxes[keys[i]]);
          }
        }
        this.response.restrictions = restrictions;
      },
      deep: true
    }
  }
};
</script>

<style scoped>
</style>
