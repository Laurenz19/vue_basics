import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsView from '../views/PostsView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import ModalsView from '../views/ModalsView.vue'
import HomePiniaView from '../views/HomePiniaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home_pinia',
      component: HomePiniaView
    },
    {
      path:'/modals',
      name:'modals',
      component: ModalsView
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path:'/posts/:id',
      name:'post_detail',
      component: PostDetailView
    }
  ]
})

export default router
