<template>
    <div class="homelayout-container">
        <SideBar></SideBar>
        <section class="home-section px-3 py-2">
            <div>
                <router-view />
            </div>
        </section>
    </div>
</template>
<script>
import SideBar from './SideBar.vue'
 export default{
    components:{
        SideBar,
    }
 }
</script>
<style scoped>
.homelayout-container{
    display: flex;
}
.home-section {
    position: relative;
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px); /* Adjusts width to fit next to sidebar */
    transition: all 0.5s ease;
    z-index: 2;
  }
</style>