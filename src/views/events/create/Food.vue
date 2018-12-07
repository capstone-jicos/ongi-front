<template>
  <section class = "section">
    <div class="container pt-lg-md">
      <h5>같이 함께할 음식의 종류를 선택해주세요</h5>
      <base-checkbox class="mb-3" v-model="checkboxes.Korean">
        한식
      </base-checkbox>
      <base-checkbox class="mb-3" v-model="checkboxes.Chinese">
        중식
      </base-checkbox>
      <base-checkbox class="mb-3" v-model="checkboxes.Japanese">
        일식
      </base-checkbox>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("createEvent");

export default {
  name: "food",
  data() {
    return {
      event: {
        type: []
      },
      checkboxes: {
        Korean: false,
        Chinese: false,
        Japanese: false
      }
    };
  },
  methods: {
    ...mapGetters(["getResponse"]),
    ...mapActions(["setPartialResponse"])
  },
  created() {
    let type = this.getResponse().type;
    if (type !== undefined && type.length !== 0) {
      this.type = type;
    }
    for (let i = 0; i < type.length; i++) {
      this.checkboxes[type[i]] = true;
    }
  },
  watch: {
    checkboxes: {
      handler: function(newValue) {
        let type = [];
        let keys = Object.keys(newValue);

        for (let i = 0; i < keys.length; i++) {
          if (newValue[keys[i]] === true) {
            type.push(keys[i]);
          }
        }
        this.event.type = type;
        this.setPartialResponse(this.event);
      },
      deep: true
    }
  }
};
</script>

<style>
</style>
