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
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("createVenue");

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
  methods: {
    ...mapActions(["setPartialResponse"]),
    ...mapGetters(["getResponse"])
  },
  watch: {
    checkboxes: {
      handler: function(newValue) {
        let restrictions = [];
        let keys = Object.keys(newValue);
        for (let i = 0; i < keys.length; i++) {
          if (this.checkboxes[keys[i]] === true) {
            restrictions.push(keys[i]);
          }
        }
        this.response.restrictions = restrictions;
        this.setPartialResponse(this.response);
      },
      deep: true
    }
  },
  created() {
    let restrictions = this.getResponse().restrictions;
    if (restrictions !== undefined && restrictions.length !== 0) {
      this.amenities = restrictions;
    }

    for (let i = 0; i < restrictions.length; i++) {
      this.checkboxes[restrictions[i]] = true;
    }
  }
};
</script>

<style scoped>
</style>
