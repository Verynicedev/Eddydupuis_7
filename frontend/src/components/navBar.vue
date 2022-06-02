<!-- Composant represantant la " banner du haut de page avec le logo de l'entreprise et l'accès au mail " -->

<template>
    <div class="container">
        <div class="navbar">
            <div class="entreprise">
                <img class="logo" src="../assets/logo.png" alt="logo-entreprise"/>
            </div>
            <div class="navButtons">
                <router-link to="/userProfile"> <img class="btnProfile" src="../assets/profile.svg" alt="logo-profile"/>   </router-link>
                <router-link to="/topicList">   <img class="btnHome" src="../assets/home.svg" alt="logo-home"/>            </router-link>

                <!-- <a class="mailto" href="mailto:contact@test.com"> <img src="../assets/mail.svg" alt=""></a> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navBar"
}
</script>

<style scoped>
.navbar{
    background-color: #2196F3;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
}

.entreprise, .navButtons {
    padding: 10px;
}

.logo {
    width:300px;
}

.btnProfile, .btnHome {
    width:50px;
}

.btnProfile:hover, .btnHome:hover{
    width:55px;
}
</style>>