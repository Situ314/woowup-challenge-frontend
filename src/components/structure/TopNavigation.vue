 <template>
    <header>
    <nav class="w-full px-4 bg-white relative z-20 text-sky-200">
        <div class="container h-20 flex justify-between text-xs md:text-sm">
            <div class="h-full flex items-center">
                <router-link to="/mailer/emails" class="flex justify-center items-center">
                    <img class="h-10 mr-4" src="/img/header-woowup-mailer.png" alt="Woowup Mialer Logo">
                </router-link>
            </div>
            <div class="h-full flex items-center">
                <div class="flex gap-3 flex-1 justify-end align-middle">
                 <i class="fa-solid fa-circle-question hover:text-sky-600 text-xl duration-150 cursor-pointer text-sky-700"
                 @click="toggleModal"></i>
                 <button @click="logout" class="hover:bg-sky-600 text-bg-red-500 duration-150 cursor-pointer font-bold bg-sky-700 px-3 rounded text-white align-middle">LOG OUT</button>
             </div>
             <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
                 <h1 class="text-black">Hiiii</h1>
             </BaseModal>
            </div>
        </div>
    </nav>
</header>
</template>
 <script setup>
 import axios from 'axios';
 import { useRouter } from 'vue-router'

 import { RouterLink } from 'vue-router';
 import BaseModal from '../BaseModal.vue'
 import { ref } from 'vue';
 import { useMailStore } from '../../store/mail-store'
import { useUserStore } from '../../store/user-store'

const userStore = useUserStore()
const mailStore = useMailStore()
const router = useRouter()

const logout = async () => {
    try {
        
        userStore.clearUser()
        mailStore.clearEmails()

        router.push('/')

    } catch (err) {
        console.log(err)
    }
}

const modalActive = ref(null);
const toggleModal = () => {
     modalActive.value = !modalActive.value
 }
 
 </script>