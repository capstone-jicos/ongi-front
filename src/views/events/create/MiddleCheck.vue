<template>
     <section class = "section">
        <div class="container pt-lg-md">
          <div class=" text-muted mb-2">모임 이름 : {{event.title}}</div>
          <div class=" text-muted mb-2">모임 시작시간 : {{event.startDate}} </div>
          <div class=" text-muted mb-2">모임 종료시간 : {{event.endDate}}</div>
          <div class=" text-muted mb-2">모임 설명 : {{event.description}} </div>
          <div class=" text-muted mb-2">모임 컨셉 사진</div>
          <div class=" text-muted mb-2">모임 참가 가능 최대 인원수 : {{event.seats}} </div>
          <div class=" text-muted mb-2">참가비 : {{event.feeAmount}} </div>
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
    ...mapGetters(["getResponse"])
  },
  created() {
    this.$emit("onNavColorChange", "black");
    this.event = this.getResponse();
  }
};
</script>
<style>
</style>
