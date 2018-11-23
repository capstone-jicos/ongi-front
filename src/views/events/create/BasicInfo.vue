<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <form role="form" >
                <base-input class="mb-3" v-model="event.title" label="모임 이름" placeholder="모임 이름"> </base-input>
                <base-input label="모임 날짜"  type="date" v-model="event.date"> </base-input>
                <div class ="row">
                    <div class="col">
                        <base-input label="모임 시작 시간" type="time" v-model="event.startTime"> </base-input>
                    </div>
                    <div class="col">
                        <base-input label="모임 종료 시간"  type="time" v-model="event.finishTime"> </base-input>
                    </div>
                </div>
                <label for="eventDescription" >모임 설명</label>
                <textarea class="form-control mb-3" v-model="event.description" rows="3" placeholder="Write a large text here ...">
                </textarea>
                <div class="mb-3">
                   <label for="eventPhoto" >회원님의 모임을 잘 보여줄 수 있는 사진을 올려주세요</label>
                    <div @click="choosePhoto()">
                        <card class="card-profile add-new-venue" no-body>
                        <div class="my-auto text-center">
                            <p>
                            <i class="xi-cloud-upload-o"></i><br/>
                            사진을 올려주세요
                            </p>
                        </div>
                        </card>
                    </div>
                    <input type="file" hidden id="event-photo"/>
                </div>
                <div class ="row">
                        <base-input class="mb-3" label="참가 최대 인원수" v-model="event.people"> </base-input>
                        <base-input class="mb-3" label="참가비" v-model="event.feeAmount"> </base-input>
                </div>
            </form>
        </div>
    </section>
</template>


<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("createEvent");

export default {
  name: "BasicInfo",
  data() {
    return {
      event: {
        title: null,
        date: null,
        startTime: null,
        finishTime: null,
        description: null,
        people: 0,
        feeAmount: 0
      }
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"]),
    choosePhoto() {
      this.$el.querySelector("#event-photo").click();
    }
  },
  watch: {
    title() {
      this.setPartialResponse(this.event);
    },
    date() {
      this.setPartialResponse(this.event);
    },
    startTime() {
      this.setPartialResponse(this.event);
    },
    finishTime() {
      this.setPartialResponse(this.event);
    },
    description() {
      this.setPartialResponse(this.event);
    },
    people() {
      this.setPartialResponse(this.event);
    },
    feeAmount() {
      this.setPartialResponse(this.event);
    }
  },
  computed: {
    title() {
      return this.event.title;
    },
    date() {
      return this.event.date;
    },
    startTime() {
      return this.event.startTime;
    },
    finishTime() {
      return this.event.finishTime;
    },
    description() {
      return this.event.description;
    },
    people() {
      return this.event.people;
    },
    feeAmount() {
      return this.event.feeAmount;
    }
  },
  created() {
    let title = this.getResponse().title;
    let date = this.getResponse().date;
    let startTime = this.getResponse().startTime;
    let finishTime = this.getResponse().finishTime;
    let description = this.getResponse().description;
    let people = this.getResponse().people;
    let feeAmount = this.getResponse().feeAmount;

    if (title !== undefined) {
      this.event.title = title;
    }
    if (date !== undefined) {
      this.event.date = date;
    }
    if (startTime !== undefined) {
      this.event.startTime = startTime;
    }
    if (finishTime !== undefined) {
      this.event.finishTime = finishTime;
    }
    if (description !== undefined) {
      this.event.description = description;
    }
    if (people !== 0) {
      this.event.people = people;
    }
    if (feeAmount !== 0) {
      this.event.feeAmount = feeAmount;
    }
  }
};
</script>

<style>
</style>
