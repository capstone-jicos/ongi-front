<template>
     <section class = "section">
        <div class="container pt-lg-md">
          <h5 class="mb-3">입력해주신 내용들을 확인해주세요</h5>
          <div class="row">
            <div class="col-4"><p><strong>모임 이름</strong></p></div>
            <div class="col-8">{{ event.title }}</div>
          </div>
          <div class="row">
            <div class="col-4"><p><strong>시작시간</strong></p></div>
            <div class="col-8">{{ localeString(event.startDate) }}</div>
          </div>
          <div class="row">
            <div class="col-4"><p><strong>종료시간</strong></p></div>
            <div class="col-8">{{ localeString(event.endDate) }}</div>
          </div>
          <div class="row">
            <div class="col-4"><p><strong>설명</strong></p></div>
            <div class="col-8">{{ event.description }}</div>
          </div>
          <div class="row">
            <div class="col">모임 컨셉사진</div>
          </div>
          <card class="card-profile add-new-venue my-3" no-body>
            <div class="my-auto text-center">
              <img v-lazy="event.photo"/>
            </div>
          </card>
          <div class="row">
            <router-link to="/terms/host">
              <a class="col">모임 생성 약관 고지</a>
            </router-link>
          </div>
        </div>
    </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("createEvent");

export default {
  name: "middlecheck",
  data() {
    return {
      event: null
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    localeString(date) {
      let dateObject = new Date(date);
      return dateObject.toLocaleString("ko-kr", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      });
    }
  },
  created() {
    this.$emit("onNavColorChange", "black");
    this.event = this.getResponse();
  }
};
</script>
<style scoped lang="scss">
.card-profile {
  height: 120px;
  div {
    overflow: hidden;
  }
}
</style>
