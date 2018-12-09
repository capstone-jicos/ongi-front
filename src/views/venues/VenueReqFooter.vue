<template>
  <div id="attend" class="row mx-0">
    <div class="col text-center my-auto">
        <base-button type="neutral" variant="primary" @click="request">장소제공요청하기</base-button>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("createEvent");
export default {
  name: "VenueReqFooter",
  data() {
    return {
      eventId: null
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    request() {
      let venueId = this.$route.params.id;
      this.eventId = this.getResponse().idx;
      let url = `/venue/apply?venueId=${venueId}&eventId=${eventId}`;
      // let payload = { card_number, expiry, birth, pwd_2digit }; 합치기
      this.$axios
        .post(url, payload, { withCredentials: true })
        .then(Response => {
          if (Response.data.errors === undefined) {
            this.$router.push("/venue/Confirm");
          }
        });
    }
  },
  created() {
    this.$emit("onNavColorChange", "black");
  }
};
</script>
<style scoped lang="scss">
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
