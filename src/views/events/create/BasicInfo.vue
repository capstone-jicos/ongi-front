<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <div class=" text-muted mb-2">모임 이름</div>
            <form role="form">
                <base-input class="mb-3" placeholder="모임 이름" id="eventName">
                </base-input>
            </form>
        </div>
        <div class="container pt-lg-md">
            <div class=" text-muted mb-2">모임 날짜</div>
            <div class="col-md-6">
                <base-input addon-left-icon="ni ni-calendar-grid-58">
                <flat-picker slot-scope="{focus, blur}"
                 @on-open="focus"
                 @on-close="blur"
                 :config="{allowInput: true}"
                 class="form-control datepicker"
                 v-model="dates.simple">
                </flat-picker>
            </base-input>
            </div>
        </div>
        <div class="container pt-lg-md">
             <div class=" text-muted mb-2">모임 시간</div>
        </div>
        <div class="container pt-lg-md">
            <div class=" text-muted mb-2">모임 설명</div>
                <form>
                    <textarea class="form-control" id="eventDescription" rows="3" placeholder="Write a large text here ...">
                    </textarea>
                </form>
        </div>
        <div class="container pt-lg-md">
            <div class=" text-muted mb-2">모임 컨셉 사진 추가</div>
        </div>
        <div class="container pt-lg-md">
            <div class=" text-muted mb-2">모임 참가 가능 최대 인원수</div>
            <div class="mt-2">
                <base-slider v-model="sliders.people" :range="{min: 0, max: 100}">
                </base-slider>
                <!-- 범위랑 음 동그라미 이동한데 나타내기!-->
                <!-- Range slider -->
            </div>
        </div>
        <div class="container pt-lg-md">
            <div class=" text-muted mb-2">참가비</div>
            <div class="mt-2">
                <base-slider v-model="sliders.money" :range="{min: 0, max: 100000}">
                </base-slider>
                <!-- 범위랑 음 동그라미 이동한데 나타내기!-->
                <!-- Range slider -->
            </div>
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
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
    components: {flatPicker},
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
