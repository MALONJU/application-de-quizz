<template>
    <div>
      
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
                        <h5 class="card-title">{{ item.question }}</h5>
                        <div v-if="item.userResponse === item.correct_answer" class="text-success">
                          <p>Votre réponse : {{ item.userResponse }}</p>
                          <p>Correct !</p>
                        </div>
                        <div v-else class="text-danger">
                          <p>Votre réponse : {{ item.userResponse }}</p>
                          <p>Incorrect !</p>
                          <p class="text-success">Réponse correcte : {{ item.correct_answer }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
//   import SecondNav from './SecondNavComponent.vue';
//   import Navbar from './NavbarComponent.vue';
  
  export default {
    name: 'ResultatQuizComponent',
    components: {
    //   Navbar,
    //   SecondNav
    },
    
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    
    setup(props) {
        console.log('Items reçus dans ResultatQuizComponent :', props.items);
      // Calcul des réponses correctes
      const nombreDeReponsesCorrectes = computed(() => {
        return props.items.filter(item => item.userResponse === item.correct_answer).length;
      });

      console.log(props.items)
      return {
        nombreDeReponsesCorrectes
      };
      
      
    },
  };
  </script>
  
  <style>
  .card {
      margin-bottom: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    } 
  </style>
  