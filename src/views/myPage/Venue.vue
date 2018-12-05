<template>
  <section>
    <div class="container">
      <div class="mt-3 py-2 border-top border-bottom text-center">
          <h5>예약 대기 목록</h5>
      </div>
      <div>
        <router-link v-for="event in events" :key="event.eventId" :to="getUrl(event.eventId)">
            <card shadow class="card-profile" no-body>
            <div class="event-item-photo" v-bind:style="{ 'background-image': 'url(' + event.photoUrl +')' }"></div>
            <div class="px-2 mb-2">
                <div class="event-name mt-2">
                <strong>{{ event.title }}</strong>
                </div>
                <div class="event-address">
                <i class="xi-maker"></i> {{ event.address }}
                </div>
            </div>
            </card>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("createEvent");

export default {
  name: "Venue",
  created() {
    this.$emit("onNavColorChange", "black");
    this.events = this.getResponse();
  },
  data(){
    return{
      events:'',
      venues: []
    }
  },
  methods: {
    ...mapGetters(["getResponse"]),
    getUrl(eventId) {
      return "/my/venue/event/" + eventId;
      // 원래 주소를 my/venue/:venueId/event/:eventId로 해주고 싶은데 방법을 모름
    }
  }
};
</script>

<style scoped  lang="scss">
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
</style>
