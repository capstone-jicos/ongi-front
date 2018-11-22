<template>
    <div id="app">
        <router-view name="header" :navColor="navColor"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view @onNavColorChange="onNavColorChange"/>
            </fade-transition>
        </main>
        <router-view name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("user");

export default {
  components: {
    FadeTransition
  },
  data() {
    return {
      navColor: undefined
    };
  },
  methods: {
    ...mapActions(["setUserInfo"]),
    onNavColorChange(color) {
      this.navColor = color;
    }
  },
  created() {
    this.$axios.get("/user/me", { withCredentials: true }).then(response => {
      this.setUserInfo(response.data);
    });

    this.$axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response) {
          if (
            error.response.config.url ===
            `${this.$axios.defaults.baseURL}/login`
          ) {
            return Promise.reject(error);
          } else if (error.response.status === 401) {
            let url = `/login?redirect_url=${this.$route.path}`;
            this.$router.push(url);
            return false;
          } else {
            return Promise.reject(error);
          }
        }
      }
    );
  }
};
</script>
