<template>
    <div>
        <div class="container-fluid ">
            <div class="row align-items-center">
              <!-- Liens à gauche -->
              <br> 
                <br> 
                <br> 
                <br> 
              <div class="col">
                <div class="d-flex justify-content-start"  style="margin-left: 250px;">
                  <a class="nav-link text-dark text-decoration-underline me-3" href="#">Tutoriels et astuces</a>
                  <a class="nav-link text-dark me-3" href="#">Outils</a>
                  <a class="nav-link text-dark me-3" href="#">Livres</a>
                  <a class="nav-link text-dark me-3" href="#">Quiz</a>
                </div>
              </div>
              <!-- Barre de recherche au centre -->
              <div class="col-md-6 d-flex justify-content-center">
                <input type="text" class="form-control me-2" style="width: 280px;" placeholder="Rechercher...">
                <button class="btn btn-outline-success" type="button">OK</button>
              </div>
            </div>
          </div>
    </div>
   </template>
   
   <script>
   
   
   export default {
     name: 'App',
     components: {
       
     }
   }
   </script>
   
   <style>
   
   </style>