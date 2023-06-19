<template>
    <div id="SendEmail" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">

        <div class="container justify-between flex text-xs md:text-sm">                
            <p class="text-slate-700 h-full text-2xl font-bold">
                <i class="fa-solid fa-envelope-open-text"></i> CREATE A NEW EMAIL
            </p>

            <div class="pb-2">
                <SubmitFormButton
                    btnText="SEND EMAIL"
                    color="emerald"
                    @submit="SendEmail"
                />
            </div>
        </div>

        <div class="container justify-between flex text-xs md:text-sm">
            <div class="bg-sky-700 w-40 h-1 ml-a"></div>
        </div>

        <div class="container bg-white p-5 mt-2">
            <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="To"
                    placeholder="example@example.com"
                    v-model:input="recipient"
                    inputType="text"
                    :error="errors.recipient ? errors.recipient[0] : ''"
                />
            </div>
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Subject"
                    placeholder="Very Important Subject"
                    v-model:input="subject"
                    inputType="text"
                    :error="errors.subject ? errors.subject[0] : ''"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-2/6 px-3">
                <TextInput 
                    label="Mails to add in CC"
                    placeholder="Add an email & ADD CC"
                    v-model:input="ccAdd"
                    inputType="text"
                    :error="''"
                />
            </div>
            <div class="w-full md:w-1/6 px-3">
                <div>
                    <button 
                        class="w-full bg-orange-500 mt-6
                        hover:bg-orange-400 text-white font-semibold
                        hover:text-white py-2 px-4 border 
                        border-orange-400 hover:border-transparent rounded"
                        @click="addCC"
                        >
                        ADD CC
                    </button>
                </div>                
            </div>
            <div class=":read-only w-full md:w-3/6 px-3">
                <TextInput
                    label="CC list"
                    placeholder="CC List comes here"
                    v-model:input="ccFinal"
                    inputType="text"
                    :readOnly=true
                    :error="errors.cc ? errors.cc[0] : ''"
                />
            </div>
            
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-2/6 px-3">
                <TextInput 
                    label="Mails to add in BCC"
                    placeholder="Add an email & ADD BCC"
                    v-model:input="bccAdd"
                    inputType="text"
                    :error="''"
                />
            </div>
            <div class="w-full md:w-1/6 px-3">
                <div>
                    <button 
                        class="w-full bg-orange-500 mt-6
                        hover:bg-orange-400 text-white font-semibold
                        hover:text-white py-2 px-4 border 
                        border-orange-400 hover:border-transparent rounded"
                        @click="baddCC"
                        >
                        ADD BCC
                    </button>
                </div>                
            </div>
            <div class=":read-only w-full md:w-3/6 px-3">
                <TextInput
                    label="BCC list"
                    placeholder="BCC list comes here"
                    v-model:input="bccFinal"
                    inputType="text"
                    :readOnly=true
                    :error="errors.bcc ? errors.bcc[0] : ''"
                />
            </div>
            
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <TextArea
                    label="Body"
                    placeholder="Write a message"
                    v-model:description="body"
                    :error="errors.body ? errors.body[0] : ''"
                />
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import TextInput from '../../components/global/TextInput.vue'
    import TextArea from '../../components/global/TextArea.vue'
    import SubmitFormButton from '../../components/global/SubmitFormButton.vue'

    import { useUserStore } from '../../store/user-store'
    import { useRouter } from 'vue-router'
    import axios from 'axios'

    import { useNotification } from "@kyvg/vue3-notification";

    const { notify }  = useNotification()
    const userStore = useUserStore()
    const router = useRouter()

    let subject = ref(null)
    let body = ref(null)
    let recipient = ref(null)
    let errors = ref([])

    let ccFinal = ref(null)
    let ccAdd = ref(null)
    let ccAdded = []

    let bccFinal = ref(null)
    let bccAdd = ref(null)
    let bccAdded = []

    const SendEmail = async () => {

        errors.value = []

        let data = new FormData();

        data.append('subject', subject.value || '')
        data.append('body', body.value || '')
        data.append('recipient', recipient.value || '')

        //Add the CC emails
        ccAdded.forEach((cc) => {
            data.append('cc[]', cc);
        });

        bccAdded.forEach((bcc) => {
            data.append('bcc[]', bcc);
        });

        try {
           await axios.post('api/send-email/', data)

           notify({
                type: "success",
                title: "Saved!",
                text: "Email was sent to the server, check its stauts in the main page",
            });

           router.push('/mailer/emails')
        } catch (err) {
            notify({
                type: "error",
                title: "Something went wrong!",
                text: "Please review the data you are sending",
            });
           errors.value = err.response.data.errors;
        }
    }

    const addCC = async () => {
      ccAdded.push(ccAdd.value);
      const message = ccAdd.value;
      const currentMessage = ccFinal.value ? ccFinal.value+';' : ''
      ccFinal.value = currentMessage + message;
    }

    const baddCC = async () => {
      const message = bccAdd.value;
      const currentMessage = bccFinal.value ? bccFinal.value+';' : ''
      bccFinal.value = currentMessage + message;
    }
</script>