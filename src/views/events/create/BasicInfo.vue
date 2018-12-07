<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <form role="form" >
                <base-input class="mb-3" v-model="event.title" label="모임 이름" placeholder="모임 이름"> </base-input>
                <base-input label="모임 시작 시간" type="datetime-local" v-model="event.startDate"> </base-input>
                <base-input label="모임 종료 시간"  type="datetime-local" v-model="event.endDate"> </base-input>
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
                        <base-input class="mb-3 col" label="참가 최대 인원수" v-model="event.seats"> </base-input>
                        <base-input class="mb-3 col" label="참가비" v-model="event.feeAmount"> </base-input>
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
        startDate: null,
        endDate: null,
        description: null,
        seats: 0,
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
    startDate() {
      this.setPartialResponse(this.event);
    },
    endDate() {
      this.setPartialResponse(this.event);
    },
    description() {
      this.setPartialResponse(this.event);
    },
    seats() {
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
    startDate() {
      return this.event.startDate;
    },
    endDate() {
      return this.event.endDate;
    },
    description() {
      return this.event.description;
    },
    seats() {
      return this.event.seats;
    },
    feeAmount() {
      return this.event.feeAmount;
    }
  },
  created() {
    let title = this.getResponse().title;
    let startDate = this.getResponse().startDate;
    let endDate = this.getResponse().endDate;
    let description = this.getResponse().description;
    let seats = this.getResponse().seats;
    let feeAmount = this.getResponse().feeAmount;

    if (title !== undefined) {
      this.event.title = title;
    }
    if (startDate !== undefined) {
      this.event.startDate = startDate;
    }
    if (endDate !== undefined) {
      this.event.endDate = endDate;
    }
    if (description !== undefined) {
      this.event.description = description;
    }
    if (seats !== 0) {
      this.event.seats =seats;
    }
    if (feeAmount !== 0) {
      this.event.feeAmount = feeAmount;
    }
  }
};
</script>

<style>
</style>
