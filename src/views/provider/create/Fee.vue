<template>
  <section class="section">
    <div class="container">
      <h4>공간 대여비는 어느정도 생각하세요?</h4>
      <div class="my-4 mx-2">
        <base-slider v-model="response.fee"
                     :range="{min:0, max:100000}"
                     integer
        ></base-slider>
      </div>
      <div class="text-center">
        <base-input v-model="response.fee"
                    align="right"
                    style="width:100px; display: inline-block;"
                    class="mx-1 my-0"
        >
        </base-input>
        <span>원</span>
      </div>
    </div>
  </section>
</template>

<script>
// TODO Vuex를 적용시켜줘야함
export default {
  name: "Fee",
  data() {
    return {
      response: {
        fee: 0
      }
    };
  },
  computed: {
    feeDisplay() {
      return this.response.fee;
    }
  }
};
</script>

<style scoped>
</style>
