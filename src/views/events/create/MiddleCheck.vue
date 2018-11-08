<template>
     <section class = "section">
        <div class="container pt-lg-md">
               <div class=" text-muted mb-2">모임 이름</div>
                <div class=" text-muted mb-2">모임 날짜</div>
                <div class=" text-muted mb-2">모임 시간</div>
                <div class=" text-muted mb-2">모임 설명</div>
                <div class=" text-muted mb-2">모임 컨셉 사진</div>
                <div class=" text-muted mb-2">모임 참가 가능 최대 인원수 </div>
                <div class=" text-muted mb-2">참가비</div>


        </div>
         <div id="attend" class="row mx-0">
                <div class="col text-center my-auto">
                    <router-link to="/event/create/food">
                    <base-button type="neutral" variant="primary">이전</base-button>
                    </router-link>
                </div>
                <div class="col text-center my-auto">
                    <router-link to="/event/create/SetVenue">
                    <base-button type="neutral" variant="primary">다음</base-button>
                    </router-link>
                </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "middlecheck",
    data(){
        return {
       }
    },
    created(){
        this.$emit("onNavColorChange", "black")
    }
}
</script>
<style>
</style>

