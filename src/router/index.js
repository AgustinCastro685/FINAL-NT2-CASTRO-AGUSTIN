import { createWebHistory, createRouter } from 'vue-router'

import Codificador from '../components/Codificador.vue'
import MultipleChoice from '../components/MultipleChoice.vue'



const routes = [
    { path: '/', name: 'Home', component: Codificador },
    { path: '/codificador', name: 'Codificador', component: Codificador },
    { path: '/multiplechoice', name: 'MultipleChoice', component: MultipleChoice }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router