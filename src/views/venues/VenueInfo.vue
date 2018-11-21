<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0"
                 v-bind:style="{ 'background-image': 'url(' + venue.image + ')' }">
        </section>
        <section class="section section-skew event-info">
            <div class="container">
                <div class="text-center mx-5 mb-5">
                    <h2>{{ venue.name }}</h2>
                </div>
                <div class="text-center h5 font-weight-300"><i class="mr-1 xi-marker-circle"></i>{{venue.location.address}}</div>
                <div class="mt-4">
                    <div class="h5 ml-1 mr-1 row">
                        <div class="col text-center float-left" ><i class="mr-1 xi-money"></i>{{ venue.fee}}원</div>
                        <div class="col  text-center float-right"><i class="mr-1 xi-user-o"></i>최대 {{ venue.people }}명</div>
                    </div>
                    <div class="h5 text-center"><i class="mr-1 xi-building"></i> 숙소 유형 : {{venue.type}}</div>
                </div>
                <div class="mt-3 py-2 border-top text-center">
                    <div class="mb-1">
                      <h5>제공사항</h5>
                      <div class="row">
                        <li class="col h6"> {{venue.amenities}} </li>
                        <li class="col h6"> {{venue.amenities}} </li>
                      </div>
                    </div>
                    <div class="h5">필요사항</div>
                    <li class="h6"> {{venue.requirements}} </li>
                    <div class="h5">제한사항</div>
                    <li class="h6"> {{venue.restrictions}} </li>
                    <!-- 주소부분 -->
                    <!-- "장소제공요청하기"버튼 넣는 장소 -->
                    <router-link to="/venue/Confirm">
                      <base-button>장소제공요청하기</base-button>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "VenueInfo",
  computed: {
    feeWithComma() {
      return this.event.fee.toLocaleString();
    }
  },
  data() {
    return {
      venue: {
       name: "내 장소 1",
        type : "아파트",
        amenities:"제공사항",
        requirements: "필요사항",
        restrictions:"제한사항",
        location: {
          name: "아주대학교",
          address: "경기도 수원시 영통구 월드컵로 306",
          coordinates: {
            lat: 37.2828093,
            lng: 127.0441714
          }
        },
        // TODO: moment를 사용해서 API 측에선 Raw한 날짜 정보만 받도록
        people : 12,
        fee: 50000,
        image: "/img/theme/img-2-1200x1000.jpg",
       
      }
    };
  },
  methods: {
  },
  created() {
    this.$emit("onNavColorChange", "white");
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
.event-info {
    padding-top: 2rem;
  padding-bottom: 6rem;
}

#attend {
  width: 100vw;
  height: 65px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  box-shadow: 0 -15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  z-index: 100;
}

button[variant="primary"] {
  padding-right: 3rem;
  padding-left: 3rem;
}
</style>
