<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <form role="form">
                <base-input class="mb-3" v-model="title" label="모임 이름" placeholder="모임 이름" id="eventName"> </base-input>
                <base-input label="모임 날짜"  type="date" v-model="eventDate"> </base-input>
                <div class ="row">
                    <div class="col">
                        <base-input label="모임 시작 시간" type="time" v-model="startTime"> </base-input>
                    </div>
                    <div class="col">
                        <base-input label="모임 종료 시간"  type="time" v-model="finishTime"> </base-input>
                    </div>
                </div>
                <label for="eventDescription" >모임 설명</label>
                <textarea class="form-control" v-model="description" id="eventDescription" rows="3" placeholder="Write a large text here ...">
                </textarea>
                <div class=" text-muted mb-2">모임 컨셉 사진 추가</div>
                <!-- v-model="eventImage" 사진 추가 기능 구현 -->
                <div class ="row">
                    <div class="col">
                        <base-input class="mb-3" label="참가 최대 인원수" v-model="people"> </base-input>
                    </div>
                    <div class="col">
                        <base-input class="mb-3" label="참가비" v-model="feeAmount"> </base-input>
                    </div>
                </div>
            </form>
        </div>
    
        <!--이거 밑에다 고정시키고 싶다! -->
        <div id="attend" class="row mx-0">
                <div class="col text-center my-auto">
                    <router-link to="/event/create">
                    <base-button type="neutral" variant="primary">이전</base-button>
                    </router-link>
                </div>
                <div class="col text-center my-auto">
                    <router-link to="/event/create/food">
                    <base-button type="neutral" variant="primary">다음</base-button>
                    </router-link>
                </div>
        </div>
    </section>
</template>


<script>
export default {
    name:"BasicInfo",
    created() {
    this.$emit("onNavColorChange", "black");
    },
    data() {
        return {
          dates: {
            simple: "2018-07-17"
          },
          sliders: {
           people: 0,
           money: 0
         },
         eventId : {},
         eventDescription:{}
        };
      }
}
</script>

<style>

</style>
