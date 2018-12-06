<template>
  <div id="attend" class="row mx-0">
    <div class="col text-center my-auto">
        <base-button type="neutral" variant="primary" @click="accept">수락</base-button>
    </div>
    <div class="col text-center my-auto">
        <base-button type="neutral" variant="primary" @click="decline">거절</base-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "HostWaitList",
  props: {
  },
  created() {
    let eventId = this.$route.params.id;
  },
  methods: {
    accept(){
      let payload= {eventId: this.$route.params.id};
      this.$axios
          .post("/venue/accept", payload, { withCredentials: true })
          .then(response => {
            console.log(response.data.errors);
            if (response.data.errors !== undefined) {
              console.log(response.data.errors);
            } else {
              this.$router.push(`/my/venue`);
            }
          });
    },
    decline(){
      let payload= {eventId: this.$route.params.id};
      this.$axios
          .post("/venue/refuse", payload, { withCredentials: true })
          .then(response => {
            console.log(response.data.errors);
            if (response.data.errors !== undefined) {
              console.log(response.data.errors);
            } else {
              this.$router.push(`/my/venue`);
            }
          });
    }
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
