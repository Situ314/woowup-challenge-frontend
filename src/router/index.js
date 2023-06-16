import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user-store'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MailerView from '../views/MailerView.vue'
import SendEmailView from '../views/account/SendEmailView.vue'
import EmailView from '../views/account/EmailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next('/mailer/emails') : next('/login')
      },
      name: 'home',
      component: MailerView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next('/mailer/emails') : next()
      },
      name: 'register',
      component: RegisterView
    },
    {
      path: '/mailer',
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next() : next('/login')
      },
      component: MailerView,
      children: [
        {
          path: 'emails',
          name: 'emails',
          component: EmailView
        },
        {
          path: 'send-mail',
          name: 'SendEmailView',
          component: SendEmailView
        }
      ]
    }
  ]
})

export default router
