<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-6 mb-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5">
                        <template>
                            <div class="text-center mb-3">
                                <small>소셜 로그인</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <i class="xi-twitter"></i>
                                   Twitter
                                </base-button>
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <hr class="my-3"/>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>아이디 / 비밀번호 로그인</small>
                            </div>
                            <form role="form">
                                <base-input class="mb-3"
                                            v-model="id"
                                            placeholder="이메일 주소"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input class="mb-3"
                                            v-model="password"
                                            placeholder="비밀번호"
                                            type="password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-checkbox class="mb-3">
                                    로그인 정보 기억하기
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="neutral"
                                                 @click="performLogin"
                                    >로그인</base-button>
                                    <base-button type="neutral">회원가입</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      id: null,
      password: null
    };
  },
  methods: {
    performLogin() {
      let data = {
        userId: this.id,
        accessToken: this.password
      };

      this.$axios.post("/login", data).then(response => {
        // TODO Vuex 에 로그인한 사용자 정보 넣기
        console.log(response);
      });
    }
  }
};
</script>
<style lang="scss">
.section-shaped {
  height: 100vh;
}
</style>
