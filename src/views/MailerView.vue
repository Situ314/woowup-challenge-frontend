<template>
    <main class="text-gray">
      <TopNavigation />
      <div id="AccountView" class="max-w-4xl mx-auto">
        <router-view/>
      </div>
      <FooterSection />
    </main>
  </template>
  
<style>
  #AccountView {
    min-height: 70vh;
  }
</style>

  <script setup>
  import { ref } from 'vue';
  import axios from 'axios'
  import TopNavigation from '../components/structure/TopNavigation.vue';
  import FooterSection from '../components/structure/FooterSection.vue';
  
  const seachQuery = ref("")
  const queryTimeout = ref(null)
  
  const getSearchResults = () => {
    queryTimeout.value = setTimeout(() => {
      if(seachQuery.value ==! ''){
        const result = axios.get()
      }
    }, 300)
  }
  </script>
  
  