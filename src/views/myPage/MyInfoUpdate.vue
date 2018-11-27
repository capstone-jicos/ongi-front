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
                      <div class="text-muted mb-2">ID : {{info.id}}</div>
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

export default {
  name: "MyInfoUpdate",
  created() {
    this.$emit("onNavColorChange", "black");
  },
  data() {
    return {
      info: {
        id:"아이디",
        pw: "패스워드",
        testpw: "테스트pw",
        gender : "남",
        country: "대한민국",
        state : "경기도",
        city : "수원시"
      }
    };
  },
  methods: {
     choosePhoto() {
      this.$el.querySelector("#my-photo").click();
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
.modifiedPw{
    width: 100%;
    height: calc(2rem + 2px);
}
</style>
