<template>
  <section class="section">
    <div class="container my-5 text-center">
      <div id="event-list-header">
        <span class="h5 ">{{name}}님의 page</span>
        </div>
    </div>
    <div class="mt-3 py-2 border-top text-center">
      <router-link to="/event/create">
        <h2>회원정보수정</h2>
      </router-link>
    </div>
    <div class="mt-3 py-2 border-top text-center">
        <router-link to="/event/create">
          <h2>참가한 모임 보기</h2>
        </router-link>
    </div>
    <div class="mt-3 py-2 border-top text-center">
      <router-link to="/event/create">
        <h2>주최한 모임 보기</h2>
      </router-link>
    </div>
    <div class="mt-3 py-2 border-top text-center">
      <router-link to="/event/create">
        <h2>등록한 장소 보기</h2>
      </router-link>
    </div>
    <div class="mt-3 py-2 border-top text-center">
    </div>
  </section>
</template>

<script>
export default {
  name: "mypage",
  created() {
    this.$emit("onNavColorChange", "black");
  },
  data() {
    return {
        name : "뀨뀨"
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/bootstrap/functions";
@import "../../assets/scss/custom/variables";

div.container {
  .card-profile {
    min-height: 150px;
    margin: 15px 0;

    .venue-item-photo {
      height: 125px;
      border-top-right-radius: 0.25rem;
      border-top-left-radius: 0.25rem;
      background-size: cover;
    }
  }

  div.add-new-venue {
    height: 100%;
    background-color: $gray-100;
    div {
      opacity: 0.3;
      p {
        font-size: 4.5rem;
      }
    }
  }
}
</style>
