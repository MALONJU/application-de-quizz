
   <template>

    <div class="nav-contener ">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                <!-- Logo à gauche -->
                <a class="navbar-brand text-dark " href="#">Logo</a>
            
                <!-- Liens au milieu -->
                <div class="navbar-nav mx-auto">
                    <a class="nav-link text-dark text-decoration-underline" href="#">Formation</a>
                    <a class="nav-link text-dark" href="#">Forum</a>
                    <a class="nav-link text-dark" href="#">Emploi</a>
                </div>
    
    
                 <!-- Boutons à droite -->
                 <div class="navbar-nav ms-auto">
                    
                      <router-link to="/ModalInscription" class="btn btn-outline-success me-2" >S'incrire</router-link>
                      <router-link to="/ModalConnexion" class="btn btn-success">Se connecter</router-link>
                </div>
                
                </div>
          </nav>
    </div>
    </template>
    <script>
  
 
    export default {
      data() {
        return {
          showModal: false
        };
      },
      components: {
        
      },
      methods: {
    openConnexion() {
      this.$emit('openConnexion');
        }
      }
      
    };
    </script>
    <style></style>