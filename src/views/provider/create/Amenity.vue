<template>
  <section class="section">
    <div class="container">
      <h4 class="mb-3">회원님의 주방에 있는<br/>요리기구들을 알려주세요</h4>
      <base-checkbox class="mb-3"
                     v-model="checkboxes.fryingPan"
      >
        프라이팬
      </base-checkbox>
      <base-checkbox class="mb-3"
                     v-model="checkboxes.wifi"
      >
        무선 인터넷
      </base-checkbox>
      <base-checkbox class="mb-3"
                     v-model="checkboxes.pot"
      >
        냄비
      </base-checkbox>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("createVenue");

export default {
  name: "Amenity",
  data() {
    return {
      response: {
        amenities: []
      },
      checkboxes: {
        fryingPan: false,
        wifi: false,
        pot: false
      }
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"])
  },
  created() {
    let amenities = this.getResponse().amenities;
    if (amenities !== undefined && amenities.length !== 0) {
      this.amenities = amenities;
    }

    for (let i = 0; i < amenities.length; i++) {
      this.checkboxes[amenities[i]] = true;
    }
  },
  watch: {
    checkboxes: {
      handler: function(newValue) {
        let amenities = [];
        let keys = Object.keys(newValue);

        for (let i = 0; i < keys.length; i++) {
          if (newValue[keys[i]] === true) {
            amenities.push(keys[i]);
          }
        }
        this.response.amenities = amenities;
        this.setPartialResponse(this.response);
      },
      deep: true
    }
  }
};
</script>

<style scoped>
</style>
