import { createWebHistory, createRouter } from "vue-router"
import QuizComponent from './components/QuizComponent.vue'
import ResultatQuizComponent from './components/ResultatQuizComponent.vue'
const routes = [
    {path:'/',component:QuizComponent,name:'QuizComponentPage'},

    {path:'/ResultatQuizComponent',component:ResultatQuizComponent,
    props: true ,
    name:'ResultatQuizComponentPage'},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
export default router;