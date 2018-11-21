<template>
  <section class="section">
    <div class="container mb-4">
      <h4 class="mb-3">입력해주신 내용들을 확인해주세요</h4>
      <div class="row">
        <div class="col-4"><p><strong>공간 이름</strong></p></div>
        <div class="col-8">{{ response.name }}</div>
      </div>
      <div class="row">
        <div class="col-4"><p><strong>위치</strong></p></div>
        <div class="col-8">{{ fullAddress }}</div>
      </div>
      <div class="row mb-2">
        <div class="col">
          <GmapMap :center="response.location.coordinates"
                   :zoom="17"
                   style="height:150px;"
          >
            <GmapMarker :position="response.location.coordinates"></GmapMarker>
          </GmapMap>
        </div>
      </div>
      <div class="row">
        <div class="col-4"><p><strong>숙소 유형</strong></p></div>
        <div class="col-8">{{ response.type }}</div>
      </div>
      <div class="row mb-2">
        <div class="col-4"><p><strong>제공사항</strong></p></div>
        <div class="col-8">
          <span v-for="(a, index) in response.amenities"
                :key="index"
          >
            {{ a }}<br/>
          </span>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-4"><p><strong>필요사항</strong></p></div>
        <div class="col-8">
          <span v-for="(r, index) in response.requirements"
                :key="index"
          >
            {{ r }}<br/>
          </span>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-4"><p><strong>제한사항</strong></p></div>
        <div class="col-8">
          <span v-for="(r, index) in response.restrictions"
                :key="index"
          >
            {{ r }}<br/>
          </span>
        </div>
      </div>
      <div class="row">
        <div class="col-4"><p><strong>수용 인원</strong></p></div>
        <div class="col-8">{{ response.capacity }}명</div>
      </div>
      <div class="row">
        <div class="col-4"><p><strong>공간 대여료</strong></p></div>
        <div class="col-8">{{ response.fee }}원</div>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("createVenue");

export default {
  name: "ResponseConfirm",
  data() {
    return {
      response: null
    };
  },
  methods: {
    ...mapGetters(["getResponse"])
  },
  created() {
    this.response = this.getResponse();
  },
  computed: {
    fullAddress() {
      return (
        this.response.location.country +
        " " +
        this.response.location.state +
        " " +
        this.response.location.city +
        " " +
        this.response.location.detailAddress
      );
    }
  }
};
</script>

<style scoped>
</style>
