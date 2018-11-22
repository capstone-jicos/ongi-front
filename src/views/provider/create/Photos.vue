<template>
  <section class="section">
    <div class="container">
      <h5 class="mb-3">회원님의 공간을 잘 보여줄 수 있는<br/>사진을 올려주세요</h5>
      <div @click="choosePhoto()">
        <card class="card-profile add-new-venue"
              no-body>
          <div class="my-auto text-center">
            <p v-if="uploadStatus === 0">
              <i class="xi-cloud-upload-o"></i><br/>
              사진을 올려주세요
            </p>
            <p v-if="uploadStatus === 1">
              <i class="xi-spinner-2 xi-spin"></i>
            </p>
            <img v-if="uploadStatus === 2"
                 v-lazy="response.photoUrl"/>
          </div>
        </card>
      </div>
      <form id="upload-photo" hidden>
        <input type="file" name="upload" id="venue-photo" @change="upload"/>
      </form>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("createVenue");

export default {
  name: "Photos",
  data() {
    return {
      response: {
        photoUrl: null
      },
      uploadUrl: `${this.$axios.defaults.baseURL}/upload`,
      uploadStatus: 0
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"]),
    choosePhoto() {
      this.$el.querySelector("#venue-photo").click();
    },
    upload() {
      let form = this.$el.querySelector("#upload-photo");
      let data = new FormData(form);

      this.$axios
        .post("/upload", data, { withCredentials: true })
        .then(response => {
          this.response.photoUrl = response.data.photoUrl;
          this.setPartialResponse(this.response);
          this.uploadStatus = 2;
        });
      this.uploadStatus = 1;
    }
  },
  created() {
    let photoUrl = this.getResponse().photoUrl;

    if (photoUrl !== null) {
      this.response.photoUrl = photoUrl;
      this.uploadStatus = 2;
    }
  }
};
</script>

<style scoped lang="scss">
div.container {
  div {
    .card-profile {
      height: 150px;

      div {
        overflow: hidden;
        i {
          font-size: 3rem;
        }
      }
    }
  }
}
</style>
