<template>
    <header class="h-[50px] flex items-center">
        <div @click="$router.go(-1)" class="cursor-pointer">
            <i class='bx bx-left-arrow-circle text-3xl pe-3' ></i>
        </div>
        <h4 class="font-medium text-lg">{{ title }}</h4>
    </header>
</template>

<script>
export default{
    props:{
        title: String
    }
}
</script>
<style scoped>



</style>