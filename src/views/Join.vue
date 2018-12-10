<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>소셜 로그인으로 가입하기</small>
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
                                <small>아이디 / 비밀번호로 가입하기</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            required
                                            class="mb-3"
                                            v-model="user.displayName"
                                            placeholder="이름"
                                            :valid="checkValid(user.displayName)"
                                            addon-left-icon="ni ni-circle-08">
                                </base-input>
                                <base-input alternative
                                            required
                                            class="mb-3"
                                            v-model="user.userId"
                                            placeholder="아이디"
                                            :valid="checkValid(user.userId)"
                                            addon-left-icon="xi-fingerprint">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="비밀번호"
                                            v-model="user.accessToken"
                                            :valid="checkValid(user.accessToken)"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>

                                <div class="mb-3 text-center">
                                    <base-radio inline
                                                name="m"
                                                class="mr-5"
                                                v-model="user.gender"
                                    >남성</base-radio>
                                    <base-radio inline
                                                name="f"
                                                v-model="user.gender"
                                    >여성</base-radio>
                                </div>
                                <hr class="my-3"/>
                                <base-input alternative
                                            required
                                            class="mb-3"
                                            v-model="user.email"
                                            placeholder="이메일 주소"
                                            :valid="checkValid(user.email)"
                                            addon-left-icon="xi-mail-o">
                                </base-input>
                                <base-input alternative
                                            required
                                            class="mb-3"
                                            v-model="user.country"
                                            placeholder="국가"
                                            :valid="checkValid(user.country)"
                                            addon-left-icon="ni ni-world-2">
                                </base-input>
                                <base-input alternative
                                            required
                                            class="mb-3"
                                            v-model="user.state"
                                            placeholder="시/도"
                                            :valid="checkValid(user.state)"
                                            addon-left-icon="xi-map-o">
                                </base-input>
                                <base-input alternative
                                            required
                                            class="mb-3"
                                            v-model="user.city"
                                            placeholder="시/군/구"
                                            :valid="checkValid(user.city)"
                                            addon-left-icon="xi-my-location">
                                </base-input>
                                <base-checkbox v-model="checked">
                                    <router-link to="/terms/privacy">
                                    <span>
                                        본 사이트에 가입함으로서 개인정보 활용 방안에 동의합니다.
                                    </span>
                                    </router-link>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary"
                                                 class="my-4"
                                                 @click="performJoin"
                                    >회원가입</base-button>
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
import { isFormBlank, checkValid } from "../script/common";

export default {
  name: "Join",
  data() {
    return {
      user: {
        displayName: null,
        userId: null,
        accessToken: null,
        gender: null,
        country: null,
        email: null,
        photoUrl: "http://public.ongi.tk/profile/placeholder.png",
        state: null,
        city: null
      },
      checked: false
    };
  },
  methods: {
    checkValid,
    performJoin() {
      let blankKey;

      if ((blankKey = isFormBlank(this.user))) {
        this.user[blankKey] = "";
        return false;
      }

      if (!this.checked) {
        alert("개인정보 활용방안에 동의하셔야 서비스를 이용하실 수 있습니다!");
        return false;
      }

      this.$axios
        .post("/join", this.user, { withCredentials: true })
        .then(response => {
          if (response.status === 200) {
            let url = "/login";

            if (this.$route.query.redirect_url !== undefined) {
              url = url.concat(
                `?redirect_url=${this.$route.query.redirect_url}`
              );
            }
            this.$router.push(url);
          }
        })
        .catch(error => {
          if (error.response.status === 412) {
            alert("이미 동일한 아이로 가입이 되어있습니다!");
          }
        });
    }
  }
};
</script>
<style scoped lang="scss">
.section-shaped {
  height: 100%;
}
</style>
