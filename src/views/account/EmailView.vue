<template>
    <div>
        <div class="mx-auto py-4">
            <div class="container justify-between flex text-xs md:text-sm">

                
                <p class="text-slate-700 h-full text-2xl font-bold">
                    <i class="fa fa-inbox"></i> LIST OF EMAILS
                </p>

                <div class="pb-2">
                    <RouterLinkButton
                        btnText="NEW EMAIL"
                        color="emerald"
                        url="/mailer/send-mail"
                    />
                </div>


            </div>
            <div class="container justify-between flex text-xs md:text-sm">
                <div class="bg-sky-700 w-40 h-1 ml-a"></div>
            </div>
        </div>

        <div v-for="mail in mailStore.mails" :key="mail" class="w-full lg:max-w-full lg:flex mb-3">
            <div :class=" mail.status == 'sent' ? 'border-l-emerald-500' : (mail.status == 'failed') ? 'border-l-rose-500': 'border-l-amber-200'" 
            class="w-full border-r border-t border-b border-l-8 border-gray-400 bg-white rounded-b 
            lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center">
                        <i class="fa fa-envelope mr-1"></i> to: {{ mail.recipient }}
                    </p>
                    <p v-if="mail.cc" class="text-sm text-gray-400 flex items-center">
                        <i class="fa fa-envelope text-white mr-1"></i> {{'cc: ' + mail.cc }}
                    </p>
                    <p v-if="mail.bcc" class="text-sm text-gray-400 flex items-center">
                        <i class="fa fa-envelope text-white mr-1"></i>{{'bcc: ' + mail.bcc }}
                    </p>
                    <div class="text-gray-900 font-bold text-xl mb-2"> 
                        {{ mail.subject }}
                    </div>
                    <p class="text-gray-700 text-base"> {{ mail.body }}</p>
                </div>

                <div class="flex items-center">
                    <img class="w-6 h-6 mr-4" :title="mail.status" :src="'/img/'+ mail.status +'.png'" alt="Avatar of Jonathan Reinink">
                    <div class="text-sm">
                        <p class="text-gray-900 text-sm font-semibold leading-none">{{ userStore.name }}</p>
                        <p class="text-gray-600 text-xs">Created at {{ mail.created_at }}</p>
                        <p v-if="mail.status == 'sent'" class="text-teal-500 text-xs font-semibold">{{ mail.comments }}</p>
                        <p v-else-if="mail.status == 'failed'" class="text-rose-500 text-xs font-semibold">{{ mail.comments }}</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script setup>
    import RouterLinkButton from '../../components/global/RouterLinkButton.vue'
    import { useMailStore } from '../../store/mail-store'
    import { useUserStore } from '../../store/user-store'
    import { useRoute } from 'vue-router'
    import axios from 'axios'
    import { onMounted } from 'vue'

    const route = useRoute()
    const mailStore = useMailStore()
    const userStore = useUserStore()

    onMounted(async () => {
        await mailStore.fetchEmailsByUserId()
    })

</script>