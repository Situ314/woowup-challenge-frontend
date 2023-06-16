<template>
  <main class="text-gray">
    <TopNavigation />
    <EmailView />
    <FooterSection />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
import TopNavigation from '../components/structure/TopNavigation.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import EmailView from './account/EmailView.vue';

</script>

