import { createMemoryHistory, createRouter } from 'vue-router'

import Login from './components/auth/Login.vue'
import App from './App.vue'
import HomeLayout from './components/home/HomeLayout.vue'
import Home from './components/home/Home.vue'
import Landing from './components/Landing.vue'

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { 
        path: '/', 
        component: Landing 
      },
      { 
        path: '/login',
        name: 'Login', 
        component: Login 
      },
      {
        path: '/home',
        component: HomeLayout,
        children: [
          {
            path: '',
            name: 'Home', 
            component: Home,
          },
          {
            path: '/group',
            name: 'Group', 
            component: () => import('./components/home/Group.vue'),
          },
        ]
      }
    ]
  },
  ,
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
