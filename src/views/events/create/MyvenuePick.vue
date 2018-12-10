<template>
  <div id="attend" class="row mx-0">
    <div class="col text-center my-auto">
        <base-button type="neutral" variant="primary" @click="select">장소선택하기</base-button>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const {mapGetters} = createNamespacedHelpers("createEvent");
export default {
  name: "MyvenuePick",
  props: {},
  method: {
    ...mapGetters(["getResponse"]),
    select(){
      let venueId = this.$route.params.id;
      let eventId = this.getResponse().idx;
      this.$axios
        .get(`/select?=${venueId}&eventId=${eventId}`, {withCredentials: true})
        .then(response => {
          if (response.status === 201) {
            this.$router.push("/event/create/Confirm");
          }
        })
        .catch(error => {
          if (error.response.status === 403) {
            alert(error.response.data.message);
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
