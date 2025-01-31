<script>
import Button from './Button.vue';

export default{
  components:{
    Button,
  }
}
</script>

<template>
  <!-- <img alt="logo" class="logo" src="../assets/electron.svg" /> -->
  <div class="p-3">
      <router-link :to="{name: 'Login'}">
        <Button title="Login"></Button>
      </router-link>
  </div>

</template>
