<template>
  <section class="section">
    <div class="container">
      <h4 class="mb-3">장소의 이름을 지어주세요</h4>
      <base-input v-model="response.name"
                  placeholder="뭘 넣어야할까?"
      ></base-input>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("createVenue");

export default {
  name: "Name",
  data() {
    return {
      response: {
        name: null
      }
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"])
  },
  watch: {
    response: {
      handler: function(newValue) {
        this.setPartialResponse(newValue);
      },
      deep: true
    }
  },
  created() {
    let currentState = this.getResponse();
    this.response.name = currentState.name;
  }
};
</script>

<style scoped>
</style>
