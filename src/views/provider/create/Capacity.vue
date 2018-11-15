<template>
  <section class="section">
    <div class="container">
      <h4>얼마나 많은 분들을 받을 수 있나요?</h4>
      <div class="my-4 mx-1">
        <base-slider v-model="response.capacity"
                     :range="{min:0, max:30}"
                     integer
        ></base-slider>
      </div>
      <p class="text-center h4">{{ response.capacity }}</p>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("createVenue");

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
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"])
  },
  watch: {
    capacity() {
      this.setPartialResponse(this.response);
    }
  },
  computed: {
    capacity() {
      return this.response.capacity;
    }
  },
  created() {
    let capacity = this.getResponse().capacity;
    if (capacity !== undefined) {
      this.response.capacity = capacity;
    }
  }
};
</script>

<style scoped>
</style>
