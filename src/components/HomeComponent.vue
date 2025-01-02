<template>
    <div>
        <div>
            <Navbar></Navbar>
          </div>
          <br><br><br><br>
          <div class="bg-gray">
            <div></div>
            <SecondNav></SecondNav>
            <div class="justifier-content-center align-items-center">
              <div class="entete d-flex align-items-center vh-50">
                <h3 class="fw-bold" style="margin-left: 260px;">Quiz JavaScript / DOM débutant</h3>
              </div>
        </div>      
        <div>
            <template v-if="showQuiz">
              <quizzComponent></quizzComponent>
            </template>
            <template v-else>
                <ResultatQuizComponent :items="items"></ResultatQuizComponent>
            </template>
          </div>
    </div>
</div>
  </template>
  
  <script>
  import quizzComponent from './QuizComponent.vue'
  import ResultatQuizComponent from './ResultatQuizComponent.vue'
  import SecondNav from './SecondNavComponent.vue';
  import Navbar from './NavbarComponent.vue';
  
  export default {
 components: {
     Navbar,
     SecondNav,
     quizzComponent,
     ResultatQuizComponent
   },
 data() {
   return {
     showQuiz: true
   };
 },
 methods: {
   validerReponses() {
     this.showQuiz = false; // Masquer le quiz après la validation des réponses
   }
 },
}
  </script>

  <style>
</style>