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
                 <i class="fa-solid fa-circle-question mt-1 hover:text-sky-600 text-xl duration-150 cursor-pointer text-sky-700"
                 @click="toggleModal"></i>
                 <button @click="logout" class="hover:bg-sky-600 text-bg-red-500 duration-150 cursor-pointer font-bold 
                 bg-sky-700 px-3 py-2 rounded text-white align-middle">LOG OUT</button>
             </div>
             <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
                <div class="text-black">
          <h1 class="text-2xl mb-1">About:</h1>
          <p class="mb-4">
            This small email app allows you to send emails to one person, but to multiple CCs or BCCs. The forntend is made using Vue 3 + Pinia + Tailwind CSS. The backend uses Laravel. 
          </p>
          <p class="mb-4">
            A default email (woowup.challenge@gmail.com) is used to send, the purpose of registering and using an email in the login is to give you authentication security, this is made with Laravel Sanctum. At the moment, it does not verify if the entered email is valid, since it is not used for sending emails, but rather works more like a username, so it must be unique through the platform.
          </p>
          <h2 class="text-2xl">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
                Go to 'New Email'
            </li>
            <li>
                Fill in the data (recipient, subject and body are required). To add CC and BCC, write the email in the text box and then press ADD CC or BCC, you will see that it is added in the next box.
            </li>
            <li>
                Send the email!
            </li>
          </ol>

          <h2 class="text-2xl">How the backend works:</h2>
          <p>
            2 services are being used to send emails, to try to harm the user as little as possible, since if the main one falls, the secondary one can still do the job. The services are Mailgun and Sendgrid. The reason for this is because both have different conditions for free use. Mailgun only allows you to send emails previously registered on your platform from any valid email you choose, while Sendgrid allows you to send email to any address, but it is the sender that has to be registered.
          </p>
        </div>
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