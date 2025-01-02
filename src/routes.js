import { createWebHistory, createRouter } from "vue-router"
import QuizComponent from './components/QuizComponent.vue'
import ResultatQuizComponent from './components/ResultatQuizComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import ModalConnexion from './components/ModalConnexion.vue'
import ModalInscription from "./components/ModalInscription.vue"
const routes = [

    {path:'/HomeComponent',component:HomeComponent,name:'HomeComponentPage'},

    {path:'/',component:QuizComponent,name:'QuizComponentPage'},
    {path:'/ModalConnexion',component:ModalConnexion,name:'ModalConnexionPage'},
    {path:'/ModalInscription',component:ModalInscription,name:'ModalInscriptionPage'},

    {path:'/ResultatQuizComponent',component:ResultatQuizComponent,
    props: true ,
    name:'ResultatQuizComponentPage'},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
export default router;