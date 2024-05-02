<template>
    <div>
      <Navbar></Navbar>
      <br>
      <br>
      <br>
      <br>
      <div class="bg-gray">
        <div>
          <SecondNav></SecondNav>
        </div>
        <div class="justify-content-center align-items-center">
          <div class="entete d-flex align-items-center vh-50">
            <h3 class="fw-bold" style="margin-left: 260px;">Résultats du Quiz JavaScript / DOM débutant</h3>
          </div>
          <div class="justify-content-center align-items-center">
            <div v-for="(item, index) in items" :key="index">
              <div class="card bg-white border-0 w-75">
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
                      <p>Réponse correcte : {{ item.correct_answer }}</p>
                    </div>
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
import { ref, computed } from 'vue';
import SecondNav from './SecondNavComponent.vue';
 import Navbar from './NavbarComponent.vue'

export default {
  name: 'ResultatQuizComponent',
  components: {
    Navbar,SecondNav
  },
  
  setup(props) {
    // Utilisation des réponses de l'utilisateur passées en tant que props
    const items = ref(props.items);

    //Affichage des données reçues dans la console pour vérification
    console.log('Items reçus dans ResultatQuizComponent :', items.value);


    // Calcul des réponses correctes
    const nombreDeReponsesCorrectes = computed(() => {
      return items.value.filter(item => item.userResponse === item.correct_answer).length;
    });

    return {
      items,
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