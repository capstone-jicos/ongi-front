<template>
  <div class="row mx-0">
    <div class="col text-center my-auto">
        <base-button type="neutral"
                     variant="primary"
                     @click.prevent="goBack">
          이전
        </base-button>
    </div>
    <div class="col text-center my-auto">
      <base-button type="neutral"
                   variant="primary"
                   @click="goNext">
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
  computed:{
    textNextButton() {
      return this.final ? "신청" : "다음";
    }
  }
};
</script>

<style scoped lang="scss">
div.row {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65px;
}
</style>
