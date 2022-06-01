<!-- Composant pour le logo Maison, qui renvoie a la page principale (Accueil - Liste de tous les topics) Changer la route logIn pour la route accueil apres les tests-->

<template>
    <header class="container">
        <div class="">
            <nav style="background-color:peachpuff;">
               <router-link to="/logIn"><img src="../assets/home.svg" alt="logo-home" style="width:50px;"/></router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "homePage"
}
</script>