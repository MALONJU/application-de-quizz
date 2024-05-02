<template>
    <div>
        <Navbar></Navbar>
    </div>
      <br> 
      <br> 
      <br> 
      <br> 
      <div  class="bg-gray">
       <div>
        <SecondNav></SecondNav>
       </div>
    <div class=" justify-content-center align-items-center">
      <div class="entete d-flex align-items-center vh-50">
        <h3 class="fw-bold" style="margin-left: 260px;">Quiz JavaScript / DOM débutant</h3>
      </div>
    <div class="justify-content-center align-items-center">
      <div v-for="(item, index) in items" :key="index">
        <div class="cards container d-flex justify-content-center align-items-center vh-60 mb-3">
          <div class="card bg-white border-0 w-75">
            <div class="card-body d-flex align-items-center border-0">
              <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3" style="width: 100px; height: 100px;">
                <h1 class="text-light">{{ index + 1 }}</h1>
                <!-- Icône pour ajouter une photo -->
                <i class="fas fa-camera text-white fs-3"></i>
              </div>
              <div>
                <h5 class="card-title">{{ item.question }}</h5>
                <div>
                  <div v-if="item.incorrect_answers && item.incorrect_answers.length > 0">
                    <div v-for="(response, responseIndex) in item.incorrect_answers" :key="responseIndex" class="form-check">
                      <input class="form-check-input" type="radio" :name="'exampleRadios' + index" :id="'exampleRadios' + index + responseIndex" :value="response">
                      <label class="form-check-label" :for="'exampleRadios' + index + responseIndex">
                        {{ response }}
                      </label>
                    </div>
                </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" :name="'exampleRadios' + index" :id="'exampleRadios' + index + item.incorrect_answers.length" :value="item.correct_answer">
                    <label class="form-check-label" :for="'exampleRadios' + index + item.incorrect_answers.length">
                      {{ item.correct_answer }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="d-flex justify-content-center">
         <div class="d-grid gap-2 d-md-block">
          <router-link to="./ResultatQuizComponent">
            <button class="btn btn-danger" @click="validerReponses">
                Valider les reponses
            </button>
          </router-link>
        </div> 
      </div>
    
    </div>
  </template>
  
   <script>
// Importer Axios
// Importer Axios
import axios from 'axios';
import { ref} from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './NavbarComponent.vue';
import SecondNav from './SecondNavComponent.vue';

export default {
  name: 'quizz-app',
  components: {
    Navbar,
    SecondNav
  },
  setup() {
   
    const router = useRouter();
    const items = ref([]);

    axios.get('https://opentdb.com/api.php?amount=10')
      .then(response => {
        items.value = response.data.results.map(result => {
          return {
            question: result.question,
            incorrect_answers: result.incorrect_answers,
            correct_answer: result.correct_answer,
            userResponse: null
          };
        });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de l\'API:', error);
      });

      const validerReponses = async () => {
      // Appeler la fonction pour récupérer les questions depuis l'API
    
    

      // Ensuite, router.push une fois que les données sont récupérées
      const resultatFormate = items.value.map(item => ({
        question: item.question,
        userResponse: item.userResponse,
        correct_answer: item.correct_answer,
        
      }));

      router.push({ name: 'ResultatQuizComponentPage', params: { items: resultatFormate } });
    };

    console.log(items.value);
    return {
      items,
      validerReponses
    };
  },
};


</script>

  <style>
  .bg-gray {
    background-color: #dadbdc; /* Couleur de fond gris */
  }
  </style>