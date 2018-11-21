<template>
  <section class="section pb-0">
    <router-link to="/event">
      <div class="role-splitter" id="guest" >
        <div class="role-description text-center">
          <h2>Guest</h2>
          <h6><strong>주변의 밥 모임에 참여해보세요</strong></h6>
        </div>
      </div>
    </router-link>
    <router-link to="#">
      <div class="role-splitter" id="host">
        <div class="role-description text-center">
          <h2>Host</h2>
          <h6><strong>당신이 원하는 모임을 만들어보세요</strong></h6>
        </div>
      </div>
    </router-link>
    <router-link to="/my/venue">
      <div class="role-splitter" id="provider">
        <div class="role-description text-center">
          <h3>Provider</h3>
          <h6><strong>다양한 사람들을 초대해보세요</strong></h6>
        </div>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "Main",
  created() {
    this.$emit("onNavColorChange", "black");
  }
};
</script>
<style scoped lang="scss">
section {
  height: 100vh;
  div.role-splitter {
    height: 33.3%;
    display: block;
    position: relative;
    top: 0;
    left: 0;
    div.role-description {
      position: absolute;
      top: 30%;
      width: 100%;
      color: black;
    }
  }

  div#guest {
    background: linear-gradient(
        0deg,
        rgba(244, 204, 112, 0.3),
        rgba(244, 204, 112, 0.3)
      ),
      url(/img/guest.png);
    background-size: cover;
  }

  div#host {
    background: linear-gradient(
        0deg,
        rgba(32, 148, 139, 0.3),
        rgba(32, 148, 139, 0.3)
      ),
      url(/img/host.png);
    background-size: cover;
    div.role-description {
      * {
        color: white;
      }
    }
  }

  div#provider {
    background: linear-gradient(
        0deg,
        rgba(211, 122, 34, 0.3),
        rgba(211, 122, 34, 0.3)
      ),
      url("/img/provider.png");
    background-size: cover;
  }
}
</style>
