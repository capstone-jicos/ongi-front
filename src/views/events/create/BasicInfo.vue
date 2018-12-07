<!--suppress HtmlUnknownTag -->
<template>
    <section class = "section">
        <div class="container pt-lg-md">
          <h5>개설할 모임에 대한 정보를 알려주세요</h5>
            <form role="form" >
                <base-input class="mb-3" v-model="event.title" label="모임 이름" placeholder="모임 이름"> </base-input>
                <base-input label="모임 시작 시간" type="datetime-local" v-model="event.startDate"> </base-input>
                <base-input label="모임 종료 시간"  type="datetime-local" v-model="event.endDate"> </base-input>
                <label>모임 설명</label>
                <wysiwyg v-model="event.description"></wysiwyg>
                <div class="my-3">
                   <label>회원님의 모임을 잘 보여줄 수 있는 사진을 올려주세요</label>
                    <div @click="choosePhoto()">
                        <card class="card-profile add-new-venue" no-body>
                          <div class="my-auto text-center">
                            <p v-if="uploadStatus === 0">
                              <i class="xi-cloud-upload-o"></i><br/>
                              사진을 올려주세요
                            </p>
                            <p v-if="uploadStatus === 1">
                              <i class="xi-spinner-2 xi-spin"></i>
                            </p>
                            <img v-if="uploadStatus === 2"
                                 v-lazy="event.photo"/>
                          </div>
                        </card>
                    </div>
                </div>
                <div class ="row">
                        <base-input class="mb-3 col" label="참가 최대 인원수" v-model="event.people"> </base-input>
                        <base-input class="mb-3 col" label="참가비" v-model="event.feeAmount"> </base-input>
                </div>
            </form>
          <form id="upload-photo" hidden>
            <input type="file" name="upload" id="event-photo" @change="upload"/>
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
        people: 0,
        feeAmount: 0,
        photo: null
      },
      uploadStatus: 0
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"]),
    choosePhoto() {
      this.$el.querySelector("#event-photo").click();
    },
    upload() {
      let form = this.$el.querySelector("#upload-photo");
      let data = new FormData(form);

      this.$axios
        .post("/upload", data, { withCredentials: true })
        .then(response => {
          this.event.photo = response.data.photoUrl;
          this.setPartialResponse(this.event);
          this.uploadStatus = 2;
        });
      this.uploadStatus = 1;
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
    startDate() {
      return this.event.startDate;
    },
    endDate() {
      return this.event.endDate;
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
    let startDate = this.getResponse().startDate;
    let endDate = this.getResponse().endDate;
    let description = this.getResponse().description;
    let people = this.getResponse().people;
    let feeAmount = this.getResponse().feeAmount;
    let photoUrl = this.getResponse().photo;

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
    if (people !== 0) {
      this.event.people = people;
    }
    if (feeAmount !== 0) {
      this.event.feeAmount = feeAmount;
    }
    if (photoUrl !== null) {
      this.event.photo = photoUrl;
      this.uploadStatus = 2;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

div {
  .card-profile {
    height: 120px;

    div {
      overflow: hidden;
      i {
        font-size: 3rem;
      }
    }
  }
}
</style>
