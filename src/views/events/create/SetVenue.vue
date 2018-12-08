<template>
    <section class = "section">
        <div class="container pt-lg-md">
          <div class="mb-3">
            <h5>회원님의 장소에서 모임을 여시겠습니까?</h5>
            <p>등록해놓은 장소로 개설하시면 바로 모임이 공개됩니다.</p>
            <div class="row mx-0">
              <div class="col text-center my-auto">
                <base-button type="neutral" variant="primary" v-on:click="condition=true">예</base-button>
              </div>
              <div class="col text-center my-auto">
                <base-button type="neutral" variant="primary" v-on:click="condition=false">아니오</base-button>
              </div>
            </div>
          </div>
        <div v-if="condition===true">
            <h3 mb-2>내 장소</h3>
            <router-link v-for="venue in venues"
                   :key="venue.venueId"
                   :to="getUrl(venue.venueId)"
            >
                <card shadow class="card-profile" no-body>
                    <div class="venue-item-photo"
                        v-bind:style="{ 'background-image': 'url(' + venue.photoUrl +')' }"
                    ></div>
                    <div class="px-2 mb-2">
                        <div class="venue-name mt-2">
                        <strong>{{ venue.name }}</strong>
                        </div>
                        <div class="venue-address">
                        <i class="xi-maker"></i> {{ venue.address }}
                        </div>
                    </div>
                </card>
            </router-link>
        </div>
        <div v-else-if="condition===false">
            <h5>다른 분들의 장소에서 모임을<br/>여실 수 있게 도와드릴게요!</h5>
            <div class="row text-center">
                <router-link to="/venue" class="col mx-auto">
                <base-button type="neutral" variant="primary">장소 선택하기</base-button>
                 </router-link>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("createEvent");
export default {
  name: "SetVenue",
  created() {
    this.event = this.getResponse();
    this.$emit("onNavColorChange", "black");
    this.$axios.get("/user/me/venue", { withCredentials: true }).then(res => {
      this.venues = res.data;
    });
  },
  data() {
    return {
      condition: "",
      venues: [],
      event: null
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    getUrl(venueId) {
      return "/event/create/setvenue/my/venue/" + venueId;
    }
    //  gotoList() {
    //   return `/venue/list?startDate=${this.event.startDate}&endDate=${this.event.endDate}&seats=${this.event.seats}`;
    // }
  }
};
</script>

<style>
</style>
