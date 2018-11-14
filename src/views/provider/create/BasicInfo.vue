<template>
  <section class="section">
    <div class="container">
      <h4>회원님의 주방이<br/>어디에 있는지 알려주세요</h4>
      <base-input label="국가/지역"
                  v-model="response.country">
      </base-input>
      <base-input label="주"
                  v-model="response.state">
      </base-input>
      <base-input label="시/군/구"
                  v-model="response.city">
      </base-input>
      <base-input label="상세주소"
                  v-model="response.detailAddress">
      </base-input>
      <label for="maps">지도 검색</label>
      <GmapMap class='col mb-5'
               id="maps"
               :center="{lat:37.288429,lng:127.0518711}"
               :zoom='17'
               style='height:300px;'
      >
      </GmapMap>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("createVenue");

export default {
  name: "BasicInfo",
  data() {
    return {
      response: {
        country: null,
        state: null,
        city: null,
        detailAddress: null,
        coordinates: {
          lat: null,
          lng: null
        }
      }
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"]),
    onValueChange() {}
  },
  mounted() {
    let keys = Object.keys(this.response);
    let coordinatesKeys = Object.keys(this.response.coordinates);
    let response = this.getResponse().location;

    console.log(keys);
    console.log(coordinatesKeys);
    console.log(response);

    for (let i = 0; keys[i] !== "coordinates" && i < keys.length; i++) {
      if (response[keys[i]] !== undefined) {
        this.response[keys[i]] = response[keys[i]];
      }
    }

    for (let i = 0; i < coordinatesKeys.length; i++) {
      if (response.coordinates[keys[i] !== undefined]) {
        this.response.coordinates[keys[i]] = response.coordinates;
      }
    }
  }
};
</script>

<style scoped>
</style>
