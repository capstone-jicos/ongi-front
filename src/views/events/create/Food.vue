<template>
     <section class = "section">
        <div class="container pt-lg-md">
            <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
            <!-- 여기다 foods.name넣었는데 왜 안뜨지,,?뀨 -->
                한식
            </base-checkbox>
            <base-checkbox class="mb-3" v-model="checkboxes.checked">
                중식
            </base-checkbox>      
        </div>
         <div id="attend" class="row mx-0">
                <div class="col text-center my-auto">
                    <router-link to="/event/create">
                    <base-button type="neutral" variant="primary">이전</base-button>
                    </router-link>
                </div>
                <div class="col text-center my-auto">
                    <router-link to="/event/create/confirm">
                    <base-button type="neutral" variant="primary">다음</base-button>
                    </router-link>
                </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"food",
    data(){
        return {
            checkboxes: {
                unchecked: false,
                checked: true,
                uncheckedDisabled: false,
                checkedDisabled: true
            },
            foods: null
       }
    },
    created(){
        this.$emit("onNavColorChange", "black"),
        this.foods= [
            {
                foodId:1,
                name:"한식"
            },
            {
                foodId:2,
                name:"중식"
            },
            {
                foodId:3,
                name:"일식"
            }
        ]
    }
}
</script>

<style>

</style>

