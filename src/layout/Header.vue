<template>
    <header class="header-global">
        <base-nav class="navbar-main"
                  transparent type=""
                  effect="light"
                  :navColor="navColor"
                  :toggled="toggled"
                  @onNavbarToggle="toggleMenu">
            <router-link slot="brand" class="mr-lg-5" to="/" active-class="app-name">
                    <img class="logo" src="/img/logo.png"/>
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <img class="logo" src="img/logo.png"/>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item dropdown">
                    <div class="nav-link" data-toggle="dropdown" role="button" @click="goMenu(`/`)">
                        <i class="xi-home"></i>
                        <span class="nav-link-inner--text">홈</span>
                    </div>
                </li>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="xi-user"></i>
                        <span class="nav-link-inner--text">마이 페이지</span>
                    </a>
                    <div @click="goMenu('/my/InfoUpdate')" class="dropdown-item">회원정보수정</div>
                    <div @click="goMenu('/my/attended')" class="dropdown-item">참가한 모임</div>
                    <div @click="goMenu('/my/hosted')" class="dropdown-item">주최한 모임</div>
                    <div @click="goMenu('/my/venue')" class="dropdown-item">등록한 장소</div>
                </base-dropdown>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="xi-help-o"></i>
                        <span class="nav-link-inner--text">도움말</span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" role="button" @click="logout">
                        <i class="xi-search"></i>
                        <span class="nav-link-inner--text">로그아웃</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import BaseDropdown from "@/components/BaseDropdown";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },
  props: {
    navColor: {
      type: String,
      description: "Color of Main Menu to be passed to BaseNav"
    }
  },
  methods:{
      logout(){
          this.$axios.get("/logout",{withCredentials: true})
          .then(res => {
              console.log(res.data);
               this.$router.push("/");
          });
      },
  data() {
    return {
      toggled: false
    }
  },
  methods: {
    goMenu(url) {
      this.toggled = !this.toggled;
      this.$router.push(url);
    },
    toggleMenu(payload) {
      this.toggled = payload;
    }
  }}
}
</script>
<style scoped lang="scss">
img.logo {
  height: 2.5rem;
}
</style>
