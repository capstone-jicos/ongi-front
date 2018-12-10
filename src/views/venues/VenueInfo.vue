<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0"
                 v-bind:style="{ 'background-image': 'url(' + venue.photoUrl + ')' }">
        </section>
        <section class="section section-skew venue-info">
            <div class="container">
                <div class="text-center mx-5">
                  <h3>{{ venue.name }}</h3>
                  <div class="text-center h6 font-weight-300"><i class="mr-1 xi-marker-circle"></i>{{briefAddress}}</div>
                </div>
                <div class="mt-4">
                  <div class="h6 text-center"><i class="mr-1 xi-building"></i> 숙소 유형 : {{venue.type}}</div>
                  <div class="h6 ml-1 mr-1 row">
                        <div class="col text-center float-left" ><i class="mr-1 xi-money"></i>{{ venue.fee}}원</div>
                        <div class="col  text-center float-right"><i class="mr-1 xi-user-o"></i>최대 {{ venue.accomodate }}명</div>
                    </div>
                </div>
                <div class="mt-3 pt-2 border-top text-center">
                    <div class="mb-1">
                      <div class ="h6">제공사항</div>
                      <ul>
                        <li v-for="(amenity, index) in venue.amenities" :key="index">{{ amenity }}</li>
                      </ul>
                      <div class="h6">필요사항</div>
                      <ul>
                        <li v-for="(rule, index) in venue.rules" :key="index">{{ rule }}</li>
                      </ul>
                    </div>
                </div>
                <div class="mt-3">
                  <h6><strong>주소</strong></h6>
                  <div>{{ fullAddress }}</div>
                </div>
                      <GmapMap class='col mb-5'
                               :center="coordinates"
                               :zoom='17'
                               style='height:300px;'
                               ref="map"
                      >
                          <GmapMarker
                              :position='coordinates'
                              :clickable='true'
                              :draggable='false'
                              >
                          </GmapMarker>
                      </GmapMap>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: "VenueInfo",
  computed: {
    coordinates() {
      return {
        lat: parseFloat(this.venue.location.coordinates.lat),
        lng: parseFloat(this.venue.location.coordinates.lng)
      };
    },
    fullAddress() {
      let location = this.venue.location;
      return `${location.country} ${location.state} ${location.city} ${
        location.detailAddress
      }`;
    },
    briefAddress() {
      let location = this.venue.location;
      return `${location.state} ${location.city}`;
    }
  },
  data() {
    return {
      venue: {
        type: "",
        accomodate: 17,
        location: {
          country: "",
          state: "",
          city: "",
          detailAddress: "",
          coordinates: { lat: "0", lng: "0" }
        },
        amenities: [],
        rules: [],
        fee: "0",
        photoUrl: "",
        name: ""
      }
      // TODO: moment를 사용해서 API 측에선 Raw한 날짜 정보만 받도록
    };
  },
  methods: {},
  created() {
    this.$emit("onNavColorChange", "white");
    let venueId = this.$route.params.id;
    let url = `/venue/infor/${venueId}`;
    this.$axios.get(url).then(res => {
      let rules = JSON.parse(decodeURIComponent(res.data.rules));
      let amenities = JSON.parse(decodeURIComponent(res.data.amenities));
      this.venue = res.data;
      this.venue.amenities = amenities;
      this.venue.rules = rules;
    });
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/bootstrap/functions";
@import "../../assets/scss/custom/variables";

div.container {
  .card-profile {
    min-height: 150px;
    margin: 15px 0;

    .event-item-photo {
      height: 125px;
      border-top-right-radius: 0.25rem;
      border-top-left-radius: 0.25rem;
      background-size: cover;
    }
  }
}
.venue-info {
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.section-profile-cover {
  height: 250px;
}

ul {
  padding-left: 0;
  li {
    list-style-type: none;
    display: inline;
    margin-left: 1rem;

    &:first-child {
      margin-left: 0;
    }
  }
}

button[variant="primary"] {
  padding-right: 3rem;
  padding-left: 3rem;
}
</style>
