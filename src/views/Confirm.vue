<template>
    <section class = "section">
        <div class="container pt-lg-md my-10 text-center mt-5">
            {{text}}이(가) 생성되었습니다
        </div>
    </section>
</template>

<script>
export default {
    name:"confirm",
 data(){
        return {
            text:'모임'
        
       }
    },
     created(){
        this.$emit("onNavColorChange", "black")
    }
}
</script>

<style>

</style>
