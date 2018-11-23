<template>
  <section class="section">
    <div class="container">
      <h5>이전에 모임을 주최해보신 적이 있나요?</h5>
      <label>Airbnb, Meetup 등 어떤 형태든 상관없습니다.</label>
      <base-radio name="true"
                  class="mb-2"
                  v-model="response.experience"
      >예</base-radio>
      <base-radio name="false"
                  class="mb-2"
                  v-model="response.experience"
      >아니오</base-radio>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("createVenue");

export default {
  name: "Experience",
  data() {
    return {
      response: {
        experience: null
      }
    };
  },
  methods: {
    ...mapActions(["setPartialResponse"]),
    ...mapGetters(["getResponse"])
  },
  computed: {
    experience() {
      return this.response.experience;
    }
  },
  watch: {
    experience() {
      this.setPartialResponse(this.response);
    }
  },
  created() {
    this.response.experience = this.getResponse().experience;
  }
};
</script>

<style scoped>
</style>
