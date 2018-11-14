<template>
  <section class="section">
    <div class="container">
      <h4>얼마나 많은 분들을 받을 수 있나요?</h4>
      <div class="my-4 mx-1">
        <base-slider v-model="response.capacity"
                     :range="{min:0, max:30}"
                     integer
                     @input="onValueChange"
        ></base-slider>
      </div>
      <p class="text-center h4">{{ response.capacity }}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Capacity",
  data() {
    return {
      response: {
        capacity: 0
      }
    };
  },
  methods: {
    ...mapGetters(["createVenue/getResponse"]),
    ...mapActions(["createVenue/setPartialResponse"]),
    onValueChange() {
      this["createVenue/setPartialResponse"](this.response);
    }
  },
  created() {
    let capacity = this["createVenue/getResponse"]().capacity;
    if (capacity !== undefined) {
      this.response.capacity = capacity;
    }
  }
};
</script>

<style scoped>
</style>
