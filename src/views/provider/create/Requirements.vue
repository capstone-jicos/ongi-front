<template>
  <section class="section">
    <div class="container">
      <h4 class="mb-3">게스트에게 필요한 것을 알려주세요</h4>
      <base-checkbox class="mb-3"
                     v-model="checkboxes.identification"
      >
        유효한 신분증
      </base-checkbox>
      <base-checkbox class="mb-3"
                     v-model="checkboxes.experience"
      >
        요리에 대한 경험
      </base-checkbox>
      <base-checkbox class="mb-3"
                     v-model="checkboxes.none"
      >
        없음
      </base-checkbox>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("createVenue");

export default {
  name: "Requirements",
  data() {
    return {
      response: {
        requirements: []
      },
      checkboxes: {
        identification: false,
        experience: false,
        none: false
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
        let requirements = [];
        let keys = Object.keys(newValue);

        for (let i = 0; i < keys.length; i++) {
          if (newValue[keys[i]] === true) {
            requirements.push(keys[i]);
          }
        }
        this.response.requirements = requirements;
        this.setPartialResponse(this.response);
      },
      deep: true
    }
  },
  created() {
    let requirements = this.getResponse().requirements;
    if (requirements !== undefined && requirements.length !== 0) {
      this.amenities = requirements;
    }

    for (let i = 0; i < requirements.length; i++) {
      this.checkboxes[requirements[i]] = true;
    }
  }
};
</script>

<style scoped>
</style>
