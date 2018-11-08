<template>
    <section class = "section">
        <div class="container pt-lg-md">
            {{text}}이(가) 생성되었습니다
        </div>
        <!-- 얘도 내리고 싶은데..... -->
    </section>
</template>

<script>
export default {
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
