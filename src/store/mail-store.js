import axios from 'axios'
import { defineStore } from 'pinia'

export const useMailStore = defineStore('email', {
  state: () => ({
    mails: null,
  }),
  actions: {
    async fetchEmailsByUserId() {
        let res = await axios.get('api/get-emails')
        this.$state.mails = res.data
    },

    clearEmails() {
        this.$state.mails = null
    }
  },
  persist: true
})