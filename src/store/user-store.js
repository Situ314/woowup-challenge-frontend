import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    token: null,
    name: null,
    email: null
  }),
  actions: {
    setUserDetails(res) {
        this.$state.id = res.data.user.id
        this.$state.token = res.data.token
        this.$state.name = res.data.user.name
        this.$state.email = res.data.user.email
    },

    async fetchUser() {
        let res = await axios.get('http://127.0.0.1:8001/api/users' + this.$state.id)

        this.$state.id = res.data.user.id
        this.$state.name = res.data.user.first_name
        this.$state.email = res.data.user.last_name 
    },

    clearUser() {
        this.$state.id = null
        this.$state.token = null
        this.$state.name = null
        this.$state.email = null
    }
  },
  persist: true
})