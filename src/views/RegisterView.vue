<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-16 w-auto" src="/img/woowup-mail.png" alt="Woowup Mail Logo" />
        <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register a new account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="space-y-6">
          <div>
            <TextInput 
                label="Full Name"
                :labelColor="true"
                placeholder="John"
                v-model:input="name"
                inputType="text"
                :error="errors.name ? errors.name[0] : ''"
            />
          </div>

          <div>
            <TextInput 
                label="Email"
                :labelColor="true"
                placeholder="example@example.com"
                v-model:input="email"
                inputType="email"
                :error="errors.email ? errors.email[0] : ''"
            />
          </div>
  
          <div>
            <TextInput 
                label="password"
                :labelColor="true"
                placeholder="********"
                v-model:input="password"
                inputType="password"
                :error="errors.password ? errors.password[0] : ''"
            />
          </div>

          <div>
            <TextInput 
                label="confirm password"
                :labelColor="true"
                placeholder="********"
                v-model:input="confirmPassword"
                inputType="password"
                :error="errors.password ? errors.password[0] : ''"
            />
          </div>
  
          <div>
            <button 
              type="submit" 
              class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="register">
              Register
            </button>
            </div>
        </div>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Already have an account?
            <router-link to="login" class="text-sky-500 no-underline hover:underline">
                Sing in
            </router-link>      
        </p>
      </div>
    </div>
  </template>

<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import { useUserStore } from '../store/user-store'
    import { useRouter } from 'vue-router';
    import TextInput from '../components/global/TextInput.vue'

    const router = useRouter()
    const userStore = useUserStore()

    let errors = ref([])
    let name = ref(null)
    let email = ref(null)
    let password = ref(null)
    let confirmPassword = ref(null)

    const register = async () => {

        errors.value = []

        try {
            let res = await axios.post('api/register', {
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: confirmPassword.value,
            })
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token
            userStore.setUserDetails(res)

            router.push('/mailer/emails/')
        } catch (err) {
            errors.value = err.response.data.errors
        }
    }

</script>