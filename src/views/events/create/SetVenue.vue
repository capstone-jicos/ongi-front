<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <h2>Host의 장소에서 모임을 여시겠습니까?</h2>
            <div id="attend" class="row mx-0">
            <div class="col text-center my-auto">
                <base-button type="neutral" variant="primary" v-on:click="condition=true">Y</base-button>
            </div>
            <div class="col text-center my-auto">
                <base-button type="neutral" variant="primary" v-on:click="condition=false">N</base-button>
            </div>
        </div>
        <div v-if="condition===true" >
            <h3 mb-2>내 장소</h3>
            <li v-for="venue in myVenues" v-bind:key="venue.id">{{venue.address}}</li>
            <div id="attend" class="row mx-0">
            <div class="col text-center my-auto">
                <router-link to="/event/create/MiddleCheck">
                <base-button type="neutral" variant="primary">이전</base-button>
                </router-link>
            </div>
            <div class="col text-center my-auto">
                <router-link to="/Confirm">
                <base-button type="neutral" variant="primary">finish</base-button>
                </router-link>
            </div>
        </div>
        </div>
        <div v-else-if="condition===false" >
            <h3>장소 대여를 도와드릴까요?</h3>
            <base-button type="neutral" variant="primary" >YES!</base-button>
            <!-- 버튼 중앙으로 가게 하고시퍼여... -->
        </div>
        </div>
        
    </section>
</template>

<script>
export default {
    name:"SetVenue",
    created() {
    this.$emit("onNavColorChange", "black");
    },
    data(){
        return {
            condition :'',
             myVenues: [
            {
                id:0,
                address : "경기도 수원시 팔달구 우만동"
            },
            {
                id:1,
                address : "경기도 성남시 분당구 서현동"
            }
        ]
       }
    }
}
</script>

<style>
</style>
