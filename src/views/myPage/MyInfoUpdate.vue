<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <form role="form" >
              <div class="mb-3">
                    <div class="container pt-lg-md text-left">
                      <form id="upload-photo" hidden>
                        <input type="file" name="upload" id="my-photo" @change="uploadPhoto"/><br>
                      </form>
                      <div class="row">
                        <div class="col-5 text-center">
                          <div v-if="!isUploading" @click="choosePhoto()" class="mx-auto my-autp">
                            <img v-lazy="info.profileImage" class="rounded-circle host-image">
                          </div>
                          <div v-else class="uploading">
                            <i class="xi-spinner-2 xi-spin my-auto"></i>
                          </div>
                        </div>
                        <div class="col-7">
                          <base-input label="이름" class="mb-2" type="text" v-model="info.displayName"></base-input>
                        </div>
                      </div>
                      <base-input label="현재 비밀번호"  type="password" v-model="currentAccessToken" ></base-input>
                      <base-input label="새로운 비밀번호"  type="password" v-model="newAccessToken" ></base-input>
                      <base-input label="새로운 비밀번호 확인" type="password" v-model="newAccessTokenValidate" ></base-input>
                      <div class="mb-3 text-center">
                        <label>성별</label>
                        <base-radio inline
                                    name="m"
                                    class="mr-5"
                                    v-model="info.gender"
                        >남성</base-radio>
                        <base-radio inline
                                    name="f"
                                    v-model="info.gender"
                        >여성</base-radio>
                      </div>
                      <hr class="my-3"/>
                      <base-input label="이메일 주소" class="mb-2" type="text" v-model="info.email"></base-input>
                      <base-input label="국가" class="mb-2" type="text" v-model="info.country"></base-input>
                      <base-input label="시/도" class="mb-2" type="text" v-model="info.state"></base-input>
                      <base-input label="시/군/구" class="mb-2" type="text" v-model="info.city"></base-input>
                      <base-button class="float-right" @click="updateInfo">저장</base-button>
                    </div>
                    <!-- 저장버튼 -->
              </div>
            </form>
        </div>
    </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("user");

export default {
  name: "MyInfoUpdate",
  created() {
    this.$emit("onNavColorChange", "black");
    this.info = this.getUserInfo();

    if (this.info.displayName === null) {
      let url = `/login?redirect_url=${this.$route.path}`;

      this.$router.push(url);
    }
  },
  data() {
    return {
      info: {},
      isUploading: false,
      currentAccessToken: null,
      newAccessToken: null,
      newAccessTokenValidate: null
    };
  },
  methods: {
    ...mapGetters(["getUserInfo"]),
    ...mapActions(["setUserInfo"]),
    choosePhoto() {
      this.$el.querySelector("#my-photo").click();
    },
    uploadPhoto() {
      let form = this.$el.querySelector("#upload-photo");
      let data = new FormData(form);

      this.$axios
        .post("/upload", data, { withCredentials: true })
        .then(response => {
          this.info.profileImage = response.data.photoUrl;
          this.isUploading = false;
        });
      this.isUploading = true;
    },
    updateInfo() {
      let payload;

      if (
        this.newAccessToken !== null &&
        this.newAccessToken !== this.newAccessTokenValidate
      ) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
      }

      payload = this.info;
      payload.currentAccessToken = this.currentAccessToken;
      payload.newAccessToken = this.newAccessToken;

      this.$axios
        .post("/user/me/update", payload, { withCredentials: true })
        .then(response => {
          if (response.data.errors === undefined) {
            alert("정상적으로 수정되었습니다.");
          }
        })
        .catch(error => {
          alert(error.response.data.msg);
        });
    }
  },
  watch: {
    info: {
      handler: function(newValue) {
        this.setUserInfo(newValue);
      },
      deep: true
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/bootstrap/functions";
@import "../../assets/scss/custom/variables";
img.host-image {
  max-width: 4.5rem;
}

div {
  label {
    display: block;
    text-align: left;
  }
}

div.uploading {
  height: 100%;
  i {
    font-size: 3.5rem;
  }
}
</style>
