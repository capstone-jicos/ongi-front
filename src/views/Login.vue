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
                                <a :href="googleLoginUrl">
                                    <base-button type="neutral">
                                        <img slot="icon" src="img/icons/common/google.svg">
                                        Google
                                    </base-button>
                                </a>
                            </div>
                        </template>
                        <hr class="my-3"/>
                        <template>
                            <div class="text-center text-muted mb-2">
                                <small>아이디 / 비밀번호 로그인</small>
                            </div>
                            <form role="form">
                                <base-input class="mb-3"
                                            v-model="id"
                                            placeholder="아이디"
                                            addon-left-icon="xi-fingerprint">
                                </base-input>
                                <base-input class="mb-3"
                                            v-model="password"
                                            placeholder="비밀번호"
                                            type="password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-center mb-2 error-msg">
                                  {{ customMsg || msg }}
                                </div>
                                <base-checkbox class="mb-3">
                                    로그인 정보 기억하기
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="neutral"
                                                 @click="performLogin"
                                    >로그인</base-button>
                                    <router-link :to="urlWithRedirect">
                                        <base-button type="neutral">회원가입</base-button>
                                    </router-link>
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
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");

export default {
  name: "Login",
  data() {
    return {
      id: null,
      password: null,
      failed: false,
      customMsg: null
    };
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    performLogin() {
      let data = {
        userId: this.id,
        accessToken: this.password
      };

      this.$axios
        .post("/login", data, { withCredentials: true })
        .then(response => {
          this.failed = false;
          this.setUserInfo(response.data);
          this.$router.push(this.$route.query.redirect_url || "/");
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 401) {
              this.failed = true;
            } else {
              this.customMsg = error.response.data;
            }
          }
        });
    }
  },
  computed: {
    msg() {
      return this.failed ? "아이디/비밀번호가 잘못 되었습니다." : "";
    },
    urlWithRedirect() {
      let joinUrl = "/join";

      if (this.$route.query.redirect_url !== undefined) {
        joinUrl = joinUrl.concat(
          `?redirect_url=${this.$route.query.redirect_url}`
        );
      }

      return joinUrl;
    },
    googleLoginUrl() {
      return `${this.$axios.defaults.baseURL}/auth`;
    }
  }
};
</script>
<style lang="scss">
.section-shaped {
  height: 100vh;
  div.error-msg {
    font-size: 80%;
    color: red;
  }
}
</style>
