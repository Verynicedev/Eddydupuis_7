<!-- Composant represantant la " banner du haut de page avec le logo de l'entreprise et l'accès au mail " -->

<template>
    <div class="container">
        <div class="row">
            <div class="col navbar" style="background-color:grey;">
                   <img src="../assets/logo.png" alt="logo-entreprise" style="width:300px"/>
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