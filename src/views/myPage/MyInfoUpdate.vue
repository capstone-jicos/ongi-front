<template>
    <section class = "section">
        <div class="container pt-lg-md">
            <form role="form" >
              <div class="mb-3">
                   <label for="myPhoto" >프로필 사진</label>
                    <div @click="choosePhoto()">
                        <card class="card-profile add-new-venue" no-body>
                        <div class="my-auto text-center">
                            <p>
                            <i class="xi-cloud-upload-o"></i>
                            </p>
                        </div>
                        </card>
                    </div>
                    <input type="file" hidden id="event-photo"/>
                    <!-- id, pw수정, pw재확인, gender, country, state, city -->
                    <!-- 저장버튼 -->
              </div>
            </form>
        </div>
    </section>
</template>

<script>
import { strictEqual } from 'assert';

export default {
  name: "MyInfoUpdate",
  created() {
    this.$emit("onNavColorChange", "black");
  },
  data() {
    return {
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
</style>
