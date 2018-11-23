<template>
  <section class = "section">
    <div class="container pt-lg-md">
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
      foods: []
      },
      checkboxes: {
        Korean : false,
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
   let foods = this.getResponse().foods;
   if(foods !==undefined && foods.length !==0){
     this.foods = foods;
   }
   for(let i=0;i<foods.length; i++){
     this.checkboxes[foods[i]]=true;
   }
  },
  watch: {
     checkboxes: {
      handler: function(newValue) {
        let foods = [];
        let keys = Object.keys(newValue);

        for (let i = 0; i < keys.length; i++) {
          if (newValue[keys[i]] === true) {
            foods.push(keys[i]);
          }
        }
        this.event.foods = foods;
        this.setPartialResponse(this.event);
      },
      deep: true
    }
  }
};
</script>

<style>
</style>
