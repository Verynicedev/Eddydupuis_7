<template>
    <main class="container" style="background-color:darkcyan;">
        <!-- Bloc d'inscription -->
        <section>
            <form>
                <h1>Inscription</h1>
                <div>
                    <input placeholder="Nom d'utilisateur">
                </div>  
                <div>
                    <input placeholder="E-mail">
                </div>
                <div>
                    <input placeholder="Mot de passe">
                </div>
                <br>
                <button type="submit">S'inscrire</button>                          
            </form>
        </section>
        <br>  
         <div>
            <router-link to="/logIn"><button>Retour à l'écran de connexion</button></router-link>
        </div>
    </main>
</template>

<script>
// import axios from "axios";
// import router from "../router";

export default {
    name: "SignUp",
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
