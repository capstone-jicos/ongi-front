<template>
     <section class = "section">
        <div class="container pt-lg-md">
               <div class=" text-muted mb-2">모임 이름 : {{event.title}}</div>
                <div class=" text-muted mb-2">모임 날짜 : {{event.date}} </div>
                <div class=" text-muted mb-2">모임 시작/종료 시간 : {{event.startTime}} - {{event.finishTime}} </div>
                <div class=" text-muted mb-2">모임 설명 : {{event.description}} </div>
                <div class=" text-muted mb-2">모임 컨셉 사진</div>
                <div class=" text-muted mb-2">모임 참가 가능 최대 인원수 : {{event.people}} </div>
                <div class=" text-muted mb-2">참가비 : {{event.feeAmount}} </div>
        </div>
         <div id="attend" class="row mx-0">
                <div class="col text-center my-auto">
                    <router-link to="/event/create/food">
                    <base-button type="neutral" variant="primary">이전</base-button>
                    </router-link>
                </div>
                <div class="col text-center my-auto">
                    <router-link to="/event/create/setvenue">
                    <base-button type="neutral" variant="primary">다음</base-button>
                    </router-link>
                </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "middlecheck",
  data() {
    return {
      event :{
      title: "케밥 먹고찌픈 사람!",
      eventDate: "2018-11-02",
      startTime: "11:05 AM",
      finishTime: "13:00 PM",
      description:
        "케밥이 먹고싶은데요 제가 친구가 없더라구요! 그래서 저랑 같이 먹어주실수 있나요?",
      people: 6,
      feeAmount: 4000
    }};
  },
  created() {
    this.$emit("onNavColorChange", "black");
  }
};
</script>
<style>
</style>
