<template>
  <section class="section section-skew">
    <div class="container">
      <card shadow class="card-profile mt--300" no-body>
        <div class="mt-3 py-2 text-center">
          <h5>참석 신청 대기 목록</h5>
        </div>
        <div class="container">
          <div class="row" v-if="guests.length === 0">
            <label class="mx-auto">참석한 신청자가 아직 없습니다.</label>
          </div>
          <div class="row" v-else v-for="guest in guests" :key="guest.attendeeId">
            <div class="col-3 my-auto">
              <img v-lazy="guest.attendeeImage" class="rounded-circle"/>
            </div>
            <div class="col-4 my-auto text-center">
              {{guest.attendeeName}}님
            </div>
            <div class="col-5 my-auto float-left">
              <base-button type="neutral"
                           variant="primary"
                           class="px-2"
                           @click="accept(guest.attendeeId)">수락</base-button>
              <base-button type="neutral"
                           variant="primary"
                           class="px-2"
                           @click="decline(guest.attendeeId)">거절</base-button>
            </div>
            <hr/>
          </div>
        </div>
      </card>
    </div>
  </section>
</template>
<script>
export default {
  name: "HostedInfo",
  components: {},
  data() {
    return {
      guests: []
    };
  },
  methods: {
    toggleMore() {
      this.isShort = !this.isShort;
    },
    isDescLong() {
      return this.event.description.length > 50;
    },
    accept(guestId) {
      let url = `/user/me/hosted/${guestId}/accepted`;
      let payload = { attendeeId: guestId };
      this.$axios
        .post(url, payload, { withCredentials: true })
        .then(response => {
          if (response.data.errors === undefined) {
            this.$router.push(`/my/hosted/event/${this.$route.params.id}`);
          }
        });
    },
    decline(guestId) {
      let url = `/user/me/hosted/${guestId}/declined`;
      let payload = { attendeeId: guestId };
      this.$axios
        .post(url, payload, { withCredentials: true })
        .then(response => {
          if (response.data.errors === undefined) {
            this.$router.push(`/my/hosted/event/${this.$route.params.id}`);
          }
        });
    }
  },
  created() {
    let eventId = this.$route.params.id;
    let url = "/user/me/hosted/".concat(eventId);
    this.$axios.get(url, { withCredentials: true }).then(res => {
      this.guests = res.data;
    });

    this.$emit("onNavColorChange", "white");
    this.$scrollToTop();
  },
  computed: {
    shownDescription() {
      return this.isShort && this.isDescLong()
        ? this.event.description.substr(0, 50).concat("...")
        : this.event.description;
    },
    showStatus() {
      return this.isShort ? "더 보기" : "간략히 보기";
    },
    feeWithComma() {
      return this.event.feeAmount.toLocaleString();
    },
    coordinates() {
      return {
        lat: parseFloat(this.event.location.coordinates.lat),
        lng: parseFloat(this.event.location.coordinates.lng)
      };
    },
    dateFormatted() {
      let date = new Date(this.event.startDate);
      return `${date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })} ${date.toLocaleTimeString("ko-KR", {
        hour: "numeric",
        minute: "numeric"
      })}`;
    },
    fullAddress() {
      let location = this.event.location;
      return `${location.country} ${location.state}
       ${location.city} ${location.detail}`;
    },
    briefAddress() {
      let location = this.event.location;
      return `${location.state} ${location.city}`;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/bootstrap/functions";
@import "../../assets/scss/custom/variables";

section {
  margin-top: -5rem;
  padding-top: 0;
  padding-bottom: 1rem;
  div.container {
    .card-profile {
      min-height: 20px;
      margin: 15px 0;

      .event-item-photo {
        height: 125px;
        border-top-right-radius: 0.25rem;
        border-top-left-radius: 0.25rem;
        background-size: cover;
      }

      div.col-5 {
        text-align: right;
      }
    }
  }
}

img {
  max-height: 40px;
}
</style>
