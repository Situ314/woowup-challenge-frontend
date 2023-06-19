<template>
  <div class="flex flex-col min-h-screen bg-zinc-100">
    <router-view/>
    <notifications />
  </div>
</template>
<script setup>
  import { RouterView } from 'vue-router'
</script>
<style lang="">
  
</style>