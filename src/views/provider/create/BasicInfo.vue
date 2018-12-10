<template>
  <section class="section">
    <div class="container">
      <h4>회원님의 주방이<br/>어디에 있는지 알려주세요</h4>
      <label>국가/지역</label>
      <base-input :valid="checkValid(response.country)"
                  v-model="response.country">
      </base-input>
      <label>주</label>
      <base-input :valid="checkValid(response.state)"
                  v-model="response.state">
      </base-input>
      <label>시/군/구</label>
      <base-input :valid="checkValid(response.city)"
                  v-model="response.city">
      </base-input>
      <label>상세주소</label>
      <base-input @keypress.enter="search"
                  :valid="checkValid(response.detailAddress)"
                  v-model="response.detailAddress">
      </base-input>
      <label for="maps">지도 검색</label>
      <GmapMap class='col mb-5'
               id="maps"
               :center="response.coordinates"
               :zoom='17'
               style='height:300px;'
               ref="maps"
      >
        <GmapMarker v-for="(m, index) in maps.marker"
                    :key="index"
                    :position="m">
        </GmapMarker>
      </GmapMap>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("createVenue");
import { checkValid } from "../../../script/common";

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
          lat: 0,
          lng: 0
        }
      },
      maps: {
        marker: []
      }
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setLocation"]),
    checkValid,
    setMarker(coordinates) {
      let lat = coordinates.lat();
      let lng = coordinates.lng();

      this.response.coordinates.lat = lat;
      this.response.coordinates.lng = lng;

      this.maps.marker.pop();
      this.maps.marker.push({ lat: lat, lng: lng });
    },
    search: function() {
      let geoCoder = new window.google.maps.Geocoder();

      this.$nextTick(() => {
        geoCoder.geocode(
          {
            address: this.fullAddress
          },
          (results, status) => {
            if (status === "OK") {
              let coordinates = results[0].geometry.location;
              this.setMarker(coordinates);
            } else {
              console.log("Failed");
            }
          }
        );
      });
    },
    initPageWithState() {
      let keys = Object.keys(this.response);
      let coordinatesKeys = Object.keys(this.response.coordinates);
      let currentState = this.getResponse().location;

      for (let i = 0; keys[i] !== "coordinates" && i < keys.length; i++) {
        if (currentState[keys[i]] !== undefined) {
          this.response[keys[i]] = currentState[keys[i]];
        }
      }

      for (let i = 0; i < coordinatesKeys.length; i++) {
        if (currentState.coordinates[keys[i] !== undefined]) {
          this.response.coordinates[keys[i]] = currentState.coordinates;
        }
      }

      this.maps.marker.push(currentState.coordinates);
    },
    initMapWithNavigator() {
      this.$nextTick(() => {
        if (this.response.coordinates.lat === 0) {
          navigator.geolocation.getCurrentPosition(position => {
            this.response.coordinates.lat = position.coords.latitude;
            this.response.coordinates.lng = position.coords.longitude;
          });
        }
      });
    }
  },
  computed: {
    fullAddress() {
      return (
        this.response.country +
        " " +
        this.response.state +
        " " +
        this.response.city +
        " " +
        this.response.detailAddress
      );
    }
  },
  watch: {
    response: {
      handler: function(oldValue, newValue) {
        this.setLocation(newValue);
      },
      deep: true
    }
  },
  created() {
    this.$nextTick(() => {
      this.initMapWithNavigator();
      this.initPageWithState();
    });
  }
};
</script>

<style scoped>
</style>
