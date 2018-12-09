<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <form role="form" >
              <div class="mb-3">
                    <input type="file" hidden id="my-photo" @change="uploadPhoto"/><br>
                    <div class="container pt-lg-md text-left">
                      <div class="row">
                        <div class="col-4 text-center">
                          <div @click="choosePhoto()">
                            <img v-lazy="info.profileImage" class="rounded-circle host-image mx-auto">
                          </div>
                        </div>
                        <div class="col-8">
                          <base-input label="이름" class="mb-2" type="text" v-model="info.displayName"></base-input>
                        </div>
                      </div>
                      <base-input label="비밀번호 수정"  type="password" v-model="info.pw" ></base-input>
                      <base-input label="비밀번호 수정 확인" type="password" v-model="info.testpw" ></base-input>
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
                      <base-button class="float-right">저장</base-button>
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
  },
  data() {
    return {
      info: {},
      uploadStatus: false
    };
  },
  methods: {
    ...mapGetters(["getUserInfo"]),
    ...mapActions(["setUserInfo"]),
    choosePhoto() {
      this.$el.querySelector("#my-photo").click();
    },
    uploadPhoto() {

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
</style>
