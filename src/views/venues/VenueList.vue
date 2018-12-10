<template>
  <section class="section">
    <div class="container">
      <div id="event-list-header">
        <span class="h5">섭외요청 가능 장소 목록</span>
        <div class="float-right">
          <router-link to="">
            <i class="xi-maker xi-2x"></i>
          </router-link>
          <router-link to="">
            <i class="xi-tune xi-2x"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <router-link v-for="venue in venues" :key="venue.idx" :to="getUrl(venue.idx)">
        <card shadow class="card-profile" no-body>
          <div class="venue-item-photo" v-bind:style="{ 'background-image': 'url(' + venue.photoUrl +')' }"></div>
          <div class="px-2 mb-2 row">
            <div class="venue-name mt-2 col-9">
              <strong>{{ venue.name }}</strong>
            </div>
            <div class="provider-photo col-3">
              <img v-lazy="venue.providerImage" class="rounded-circle"/>
            </div>
          </div>
          <div class="px-2 mb-2">
            <div class="venue-address">
              <i class="xi-maker"></i> {{ venue.state }}
            </div>
            <div class="row">
              <div class="col float-left"><i class="xi-building"></i> {{venue.type}}</div>
              <div class="col text-center" ><i class="xi-money"></i>{{ venue.fee}}원</div>
              <div class="col text-right"><i class="xi-user-o"></i>{{ venue.accomodate }}명</div>
            </div>
          </div>
        </card>
      </router-link>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("createEvent");

export default {
  name: "VenueList",
  created() {
    this.event = this.getResponse();
    this.$emit("onNavColorChange", "black");
    let startDate = new Date(this.event.startDate);
    let endDate = new Date(this.event.endDate);
    let jsonStartDate = startDate.toJSON();
    let jsonEndDate = endDate.toJSON();
    let url = `/venue/venuelist?startDate=${jsonStartDate}&endDate=${jsonEndDate}&seats=${this.event.seats}`;
    this.$axios.get(url, { withCredentials: true }).then(res => {
      this.venues = res.data;
    });
  },
  data() {
    return {
      venues: []
    };
  },
  methods: {
     ...mapGetters(["getResponse"]),
    getUrl(venueId) {
      return "/venue/" + venueId;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/bootstrap/functions";
@import "../../assets/scss/custom/variables";

img {
  max-height: 50px;
}

div.provider-photo {
  img {
    margin-top: -30px;
  }
}

div.container {
  .card-profile {
    min-height: 150px;
    margin: 15px 0;

    .venue-item-photo {
      height: 125px;
      border-top-right-radius: 0.25rem;
      border-top-left-radius: 0.25rem;
      background-size: cover;
    }
  }

  div.add-new-venue {
    height: 100%;
    background-color: $gray-100;
    div {
      opacity: 0.3;
      p {
        font-size: 4.5rem;
      }
    }
  }
}
</style>
