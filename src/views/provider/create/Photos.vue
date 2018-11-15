<template>
  <section class="section">
    <div class="container">
      <h5 class="mb-3">회원님의 공간을 잘 보여줄 수 있는<br/>사진을 올려주세요</h5>
      <div @click="choosePhoto()">
        <card class="card-profile add-new-venue"
              no-body>
          <div class="my-auto text-center">
            <p>
              <i class="xi-cloud-upload-o"></i><br/>
              사진을 올려주세요
            </p>
          </div>
        </card>
      </div>
      <input type="file" hidden id="venue-photo"/>
    </div>
  </section>
</template>

<script>
export default {
  name: "Photos",
  methods: {
    choosePhoto() {
      this.$el.querySelector("#venue-photo").click();
    }
  }
};
</script>

<style scoped lang="scss">
div.container {
  div {
    .card-profile {
      min-height: 150px;

      i {
        font-size: 3rem;
      }
    }
  }
}
</style>
