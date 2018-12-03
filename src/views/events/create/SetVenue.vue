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
            <ul>
                <li v-for="venue in event" v-bind:key="venue.id">{{venue.address}}</li>
            </ul>
            <div class="row mx-0 my-5">
            <div class="col text-center my-auto">
                <router-link to="/event/create/middlecheck">
                <base-button type="neutral" variant="primary">이전</base-button>
                </router-link>
            </div>
            <div class="col text-center my-5">
                <router-link to="/event/create/confirm">
                <base-button type="neutral" variant="primary">finish</base-button>
                </router-link>
            </div>
        </div>
        </div>
        <div v-else-if="condition===false" class="my-5">
            <h3>장소 대여를 도와드릴까요?</h3>
            <div class="text-center mt-5">
                <router-link to="/venue">
                <base-button type="neutral" variant="primary">YES!</base-button>
                 </router-link>
            </div>
        </div>
        </div>

    </section>
</template>

<script>
export default {
  name: "SetVenue",
  created() {
    this.$emit("onNavColorChange", "black");
  },
  data() {
    return {
      condition: "",
      event: [
        {
          id: 0,
          address: "경기도 수원시 팔달구 우만동"
        },
        {
          id: 1,
          address: "경기도 성남시 분당구 서현동"
        }
      ]
    };
  }
};
</script>

<style>
</style>
