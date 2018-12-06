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
                    <input type="file" hidden id="event-photo"/><br>
                    <div class="container pt-lg-md text-left">
                      <base-input label="DispayName" class="mb-2" type="text" v-model="info.displayName"></base-input>
                      <base-input label="PW수정" class=" modifiedPw" type="password" v-model="info.pw" ></base-input>
                      <base-input label="PW수정확인" class=" modifiedPw" type="password" v-model="info.testpw" ></base-input>
                      <base-input label=">Gender" class="mb-2" type="text" v-model="info.gender"></base-input>
                      <base-input label="Country" class="mb-2" type="text" v-model="info.country"></base-input>
                      <base-input label="State" class="mb-2" type="text" v-model="info.state"></base-input>
                      <base-input label="City" class="mb-2" type="text" v-model="info.city"></base-input>
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
    this.info = this.getUserInfo();
  },
  data() {
    return {
      info: {}
    };
  },
  methods: {
    ...mapGetters(["getUserInfo"]),
    ...mapActions(["setUserInfo"]),
    choosePhoto() {
      this.$el.querySelector("#my-photo").click();
    }
  },
  watch: {
    city() {
      this.setUserInfo(this.info);
    },
    country() {
      this.setUserInfo(this.info);
    },
    displayname() {
      this.setUserInfo(this.info);
    },
    gender() {
      this.setUserInfo(this.info);
    },
    state() {
      this.setUserInfo(this.info);
    },
    profileImage() {
      this.setUserInfo(this.info);
    }
  },
  computed: {
    city() {
      return this.info.city;
    },
    country() {
      return this.info.country;
    },
    displayname() {
      return this.info.displayname;
    },
    gender() {
      return this.info.gender;
    },
    state() {
      return this.info.state;
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
</style>
