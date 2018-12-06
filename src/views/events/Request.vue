<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <h2>필수약관동의</h2>
            <div id="attend" class="row mx-0 my-5">
            <div class="col text-center my-auto">
                <base-button type="neutral" variant="primary" v-on:click="condition=true">Y</base-button>
            </div>
            <div class="col text-center my-auto">
                <base-button type="neutral" variant="primary" v-on:click="condition=false">N</base-button>
            </div>
        </div>
        <div v-if="condition===true" class="my-5" >
            <h3 mb-2>결제 모듈 적용하기</h3>
            <div class="col text-center my-5">
                <base-button type="neutral" variant="primary" @click="Confirm">finish</base-button>
            </div>
        </div>
        
        <div v-else-if="condition===false" class="my-5">
            <h3>모임 참가 신청을 취소하시겠습니까?</h3>
            <div class="text-center mt-5">
                <router-link to="/event">
                <base-button type="neutral" variant="primary" >YES!</base-button>
                </router-link>
            </div>
        </div>
        </div>
        
    </section>
</template>

<script>
export default {
  name: "Request",
  created() {
    this.$emit("onNavColorChange", "black");
  },
  data() {
    return {
      condition: ""
    };
  },
  methods: {
    getUrl() {
      return `/event/${this.$route.params.id}/request/Confirm`;
    },
    Confirm() {
      let payload = {
        eventId: this.$route.params.id
      };
      let url = `/event/${this.$route.params.id}/join`;
      this.$axios
        .post(url, payload, { withCredentials: true })
        .then(response => {
          console.log(response.data.errors);
          if (response.data.errors !== undefined) {
            console.log(response.data.errors);
          } else {
            this.$router.push(
              `/event/${this.$route.params.id}/request/Confirm`
            );
          }
        });
    }
  }
};
</script>

<style>
</style>
