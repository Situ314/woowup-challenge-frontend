<template>
   <header class="sticky top-0 bg-slate-50 shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-black py-6">
            <RouterLink :to="{ name: 'home' }">
                <div class="flex items-center gap-3 flex-1">
                        <i class="fa-solid fa-sun"></i>
                        <p> MAILER</p>
                </div>  
            </RouterLink>
            
            <div class="flex gap-3 flex-1 justify-end">
                <i class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"
                @click="toggleModal"></i>
                <p class="hover: text-bg-red-500 duration-150 cursor-pointer">Log out</p>
            </div>
            <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
                <h1 class="text-black">Hiiii</h1>
            </BaseModal>
        </nav>
   </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import BaseModal from './BaseModal.vue'
import { ref } from 'vue';

const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value
}

</script>