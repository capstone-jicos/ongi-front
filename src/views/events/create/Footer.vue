<template>
  <div class="row mx-0">
    <div class="col text-center my-auto">
        <base-button type="neutral" variant="primary" @click.prevent="goBack">
          이전
        </base-button>
    </div>
    <div class="col text-center my-auto">
      <base-button type="neutral" variant="primary" @click="goNext">
        {{ textNextButton }}
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    final: {
      type: Boolean,
      default: false,
      description: "최종단계인지"
    }
  },
  methods: {
    goBack() {
      this.$emit("onBackButton");
    },
    goNext() {
      this.$emit("onNextButton");
    }
  },
  computed: {
    textNextButton() {
      return this.final ? "신청" : "다음";
    }
  }
};
</script>

<style scoped lang="scss">
div.row {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background-color: white;
  box-shadow: 0 -15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  z-index: 100;
}
</style>
