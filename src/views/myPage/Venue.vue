<template>
  <section>
    <div class="container">
      <div class="mt-3 pb-2 border-top border-bottom text-center">
          <h5>예약 대기 목록</h5>
      </div>
      <div class="pb-2">
        <router-link v-for="event in events" :key="event.eventId"
                   :to="'/my/venue/event/'+event.idx">
            <card shadow class="card-profile" no-body>
            <div class="event-item-photo" v-bind:style="{ 'background-image': 'url(' + event.eventImages +')' }"></div>
            <div class="px-2 mb-2 row">
                <div class="event-name mt-2 col">
                <strong>{{ event.title }}</strong>
                </div>
                <div class="event-address col">
                <i class="xi-user"></i> {{ event.seats }}
                </div>
            </div>
            </card>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Venue",
  created() {
    this.$emit("onNavColorChange", "black");
    this.$axios.get("/venue/applylist", { withCredentials: true }).then(res => {
      if (res.data.length === 0) {
        alert("장소 제공 요청 목록이 없습니다.");
      }
      this.events = res.data;
    });
  },
  data() {
    return {
      events: []
    };
  },
  methods: {
    getUrl(eventId) {
      return "/my/venue/event/" + eventId;
    }
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
</style>
