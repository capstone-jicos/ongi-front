<template>
     <section class = "section">
        <div class="container pt-lg-md">
            <base-checkbox class="mb-3"  v-for="food in foods" v-bind:key="food.id" v-model="food.check">
                {{food.name}}
            </base-checkbox>
            <!-- 한 번에 왜 다 체크가 같이 되는거지,,,? 따로 되어야 하는뎅 -->
        </div>
         <div id="attend" class="row mx-0">
                <div class="col text-center my-auto">
                    <router-link to="/event/create">
                    <base-button type="neutral" variant="primary">이전</base-button>
                    </router-link>
                </div>
                <div class="col text-center my-auto">
                    <router-link to="/event/create/middlecheck">
                    <base-button type="neutral" variant="primary">다음</base-button>
                    </router-link>
                </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "food",
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true,
        uncheckedDisabled: false,
        checkedDisabled: true
      },
      foods: null
    };
  },
  created() {
    this.$emit("onNavColorChange", "black"),
      (this.foods = [
        {
          foodId: 1,
          name: "한식",
          check: false
        },
        {
          foodId: 2,
          name: "중식",
          check: false
        },
        {
          foodId: 3,
          name: "일식",
          check: false
        }
      ]);
  }
};
</script>

<style>
</style>
