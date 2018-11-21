<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type=""
                  effect="light" :navColor="navColor">
            <router-link slot="brand" class="mr-lg-5" to="/" active-class="app-name">
                    <i class="fa fa-cutlery" aria-hidden="true"></i> 온기
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                  <i class="fa fa-cutlery"></i> 온기
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="xi-home"></i>
                        <span class="nav-link-inner--text">홈</span>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="xi-search"></i>
                        <span class="nav-link-inner--text">검색</span>
                    </a>
                </li>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="xi-user"></i>
                        <span class="nav-link-inner--text">마이 페이지</span>
                    </a>
                    <router-link to="/my/InfoUpdate" class="dropdown-item">회원정보수정</router-link>
                    <router-link to="/my/attended" class="dropdown-item">참가한 모임</router-link>
                    <router-link to="/my/hosted" class="dropdown-item">주최한 모임</router-link>
                    <router-link to="/my/venue" class="dropdown-item">등록한 장소</router-link>
                </base-dropdown>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="xi-help-o"></i>
                        <span class="nav-link-inner--text">도움말</span>
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
  }
};
</script>
<style scoped lang="scss">
.app-name {
  margin: 0 1rem;
  font-size: 1.75rem;
  color: lightsalmon;
}

@media (max-device-width: 880px) {
  .app-name {
    margin: 0;
  }
}

.collapse-brand {
  font-size: 1.75rem;
  color: lightsalmon;
}
</style>
