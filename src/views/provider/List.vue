<template>
  <section class="section">
    <div class="container">
      <div id="event-list-header">
        <span class="h5">{{ displayName }}님의 장소</span>
        </div>
      </div>
    <div class="container">
      <router-link to="./venue/create">
        <card shadow class="card-profile add-new-venue" no-body>
          <div class="my-auto text-center">
            <p>+</p>
          </div>
        </card>
      </router-link>
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
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("user");

export default {
  name: "List",
  created() {
    this.$emit("onNavColorChange", "black");
    this.displayName = this.getUserInfo().displayName;

    this.$axios.get("/user/me/venue", { withCredentials: true }).then(res => {
      this.venues = res.data;
    });
  },
  data() {
    return {
      venues: [],
      displayName: null
    };
  },
  methods: {
    getUrl(venueId) {
      return "/my/venue/" + venueId;
    },
    ...mapGetters(["getUserInfo"])
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
