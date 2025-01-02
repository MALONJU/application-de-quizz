<template>
    <div>
      <Navbar>
      
      </Navbar>
    </div>
    <br><br>
    <div class="bg-gray">
      <div></div>
      <SecondNav>
      </SecondNav>
      <div class="justifier-content-center align-items-center">
        <div v-if="!showAnswerTemplate">
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
                    <i class="fas fa-camera text-white fs-3"></i>
                  </div>
                  <div>
                    <h4 class="card-title">{{ item.question }}</h4>
                    <div>
                      <div v-if="item.incorrect_answers && item.incorrect_answers.length > 0">
                        <div v-for="(response, responseIndex) in item.incorrect_answers" :key="responseIndex" class="form-check">
                            <input class="form-check-input" type="radio" :name="'exampleRadios' + index" :id="'exampleRadios' + index + responseIndex" :value="response" v-model="item.userResponse">
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
        <div class="d-flex justify-content-center">
            <div class="d-grid gap-2 d-md-block">
                <button class="btn btn-danger" @click="validerReponses">Valider les réponses</button>
            </div>
          </div>
      </div>
      <div  v-else >
        <div class="bg-gray">
            <div class="entete d-flex align-items-center vh-50">
                <h3 class="fw-bold" style="margin-left: 200px;">Resultat quizz/ culture general</h3>
              </div>
              <div class="justify-content-center align-items-center ">
                <div v-for="(item, index) in items" :key="index">
                  <div class="card bg-white border-0 w-75 mx-auto">
                    <div class="card-body d-flex align-items-center border-0">
                      <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3" style="width: 100px; height: 100px;">
                        <h1 class="text-light">{{ index + 1 }}</h1>
                        <!-- Icône pour ajouter une photo -->
                        <i class="fas fa-camera text-white fs-3"></i>
                      </div>

                      <div>
                        <h4 class="card-title">{{ item.question }}</h4>
                        <p>Votre réponse : {{ item.userResponse }}</p>
                        <p v-if="item.userResponse ===item.correct_answer"  class="text-success">Correct !</p>
                        <p v-else class="text-danger">
                            Incorrect !
                            <br>Réponse correcte : {{ item.correct_answer }}
                        </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
             <div>
               
                <div class="rounded-circle bg-black d-flex align-items-center justify-content-center me-3" style="width: 100px; height: 100px;  margin-left: 260px;">
                    <h1 class="text-light">1</h1>
                   <div>
                   </div>
                  </div>
             </div>
          </div>

      </div>
    </div>
    <br>
    <br>
    <div>
    <div>
      <p class="fs-4" style="margin-left: 140px;">
          Dans DreamWeaver, il y a "Dream", ce qui indique que faire un site avec ce logiciel est du domaine du rêve?
      </p>
      <p class="text-success d-flex justify-content-center">(billie laure )</p>
  </div>
  <div class="icon">
    <font-awesome-icon :icon="['fab', 'git']" class="blue-icon" />
    <font-awesome-icon :icon="['fab', 'facebook']" class="blue-icon" />
    <font-awesome-icon :icon="['fab', 'twitter']" class="blue-icon" />
    <font-awesome-icon :icon="['fas', 'wifi']" class="blue-icon" />

    <div class="link-container">
      <a class="nav-link" href="#">Plan du site</a>
      <a class="nav-link" href="#">Contact</a>
      <a class="nav-link" href="#">Formations</a>
      <a class="nav-link" href="#">Agence web</a>
  </div>
  </div>
  </div>
  
    </div>
    <div>
      <FooterComponent></FooterComponent>
    </div>
  </template>
  
 
  
   <script>
import axios from 'axios';
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Navbar from './NavbarComponent.vue';
import SecondNav from './SecondNavComponent.vue';
import FooterComponent from './FooterComponent.vue';


export default {
  name: 'quizz-app',
  components: {
    Navbar,
    SecondNav,
    FontAwesomeIcon,
    FooterComponent,
  
    // ResultatQuizComponent
  },
  setup() {
    const showAnswerTemplate = ref(false); // Ajout de la variable showAnswerTemplate avec réactivité
    const items = ref([]);

    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10');
        items.value = response.data.results.map(result => ({
          question: result.question,
          incorrect_answers: result.incorrect_answers,
          correct_answer: result.correct_answer,
          userResponse: null
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'API:', error);
      }
    };

   // Dans votre script
   // Logique pour vérifier les réponses
    const validerReponses = () => {
    showAnswerTemplate.value = true;
    items.value.forEach(item => {
        if (item.userResponse === item.correct_answer) {
            item.isCorrect = true;
        } else {
            item.isCorrect = false;
        }
    });

    // Autre traitement que vous pourriez avoir

    console.log(items.value); // Vérifiez les réponses correctes et incorrectes dans la console
};

    fetchQuestions();

    return {
      showAnswerTemplate, // Retourner showAnswerTemplate dans la configuration setup()
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
  .blue-icon {
    color: blue;
    width: 20px;
    height: 20px;
    margin-right: 10px; 
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon .blue-icon {
    margin: 0 10px; /* Espace entre les icônes */
  }

  .icon .nav-link {
    margin: 0 10px; /* Espace entre les liens */
    text-decoration: none;
    color: rgb(26, 45, 151);
    font-weight: bold;
  }

  .icon a {
    text-decoration: none;
    color: black;
  }

  .icon .link-container {
        display: flex;
        align-items: center;
    }



  </style>