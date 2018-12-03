<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <form role="form" >
              <div class="mb-3">
                   <label for="myPhoto" >프로필 사진</label>
                    <div @click="choosePhoto()">
                        <card class="card-profile add-my-photo" no-body>
                        <div class="my-auto text-center">
                            <p><i class="xi-cloud-upload-o"></i></p>
                        </div>
                        </card>
                    </div>
                    <input type="file" hidden id="myPhoto"/><br>
                    <div class="container pt-lg-md text-left">
                      <div class="text-muted mb-2">ID : {{info.uniqueId}}</div>
                      <div class="text-muted mb-2">별명 : {{info.displayName}}</div>
                      <div class ="row">
                        <div class="col">
                          <div class="text-muted">PW 수정 : </div>
                        </div>
                        <div class="col-8">
                         <base-input class="float-left modifiedPw" type="password" v-model="info.pw" ></base-input>
                        </div>
                      </div>
                       <div class ="row">
                        <div class="col">
                          <div class="text-muted">PW 재확인 : </div>
                        </div>
                        <div class="col-8">
                         <base-input class="float-left modifiedPw" type="password" v-model="info.testpw" ></base-input>
                        </div>
                      </div>
                      <div class=" text-muted mb-2">Gender : {{info.gender}} </div>
                      <div class=" text-muted mb-2">Country : {{info.country}}</div>
                      <div class=" text-muted mb-2">State : {{info.state}} </div>
                      <div class=" text-muted mb-2">City : {{info.city}} </div>
                    </div>
                    <!-- 저장버튼 -->
                    <base-button class="float-right">저장</base-button>

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

    let displayName = this.getUserInfo().displayName;
    let uniqueId = this.getUserInfo().uniqueId;
    let gender = this.getUserInfo().gender;
    let country = this.getUserInfo().country;
    let state = this.getUserInfo().state;
    let profileImage = this.getUserInfo().profileImage;
  },
  data() {
    return {
      info: {
        displayName: null,
        uniqueId: null,
        pw: null,
        testpw: null,
        gender: null,
        country: null,
        state: null,
        profileImage: null
      }
    };
  },
  methods: {
    ...mapGetters(["getUserInfo"]),
    ...mapActions(["setUserInfo"]),
    choosePhoto() {
      this.$el.querySelector("#my-photo").click();
    }
  },
  computed: {
    displayName() {
      return this.info.displayName;
    },
    uniqueId() {
      return this.info.uniqueId;
    },
    gender() {
      return this.info.gender;
    },
    country() {
      return this.info.country;
    },
    state() {
      return this.info.state;
    },
    profileImage() {
      return this.info.profileImage;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/bootstrap/functions";
@import "../../assets/scss/custom/variables";
div.container {
  div {
    .card-profile {
      min-height: 150px;
    }
  }
}
.modifiedPw {
  width: 100%;
  height: calc(2rem + 2px);
}
</style>
