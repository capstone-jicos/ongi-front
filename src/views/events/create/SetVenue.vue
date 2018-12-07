<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <h2>Host의 장소에서 모임을 여시겠습니까?</h2>
            <div class="row mx-0 my-5">
            <div class="col text-center my-auto">
                <base-button type="neutral" variant="primary" v-on:click="condition=true">Y</base-button>
            </div>
            <div class="col text-center my-auto">
                <base-button type="neutral" variant="primary" v-on:click="condition=false">N</base-button>
            </div>
        </div>
        <div v-if="condition===true" class="my-5" >
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
        <div v-else-if="condition===false" class="my-5">
            <h3>장소 대여를 도와드릴까요?</h3>
            <div class="text-center mt-5">
                <router-link to= "/venue">
                <base-button type="neutral" variant="primary">YES!</base-button>
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
