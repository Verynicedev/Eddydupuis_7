<template>
  <div class="card">
    <h1 class="card__title">Créer un post</h1>
<br>
    <div class="form-row">
      <input v-model="pseudonyme" class="form-row__input" type="text" placeholder="Title"/>
    </div>
<br>
    <div class="form-row">
      <input v-model="email" class="form-row__input" type="text" placeholder="Content" style="width:475px; height: 200px;"/>
    </div>
<br>
    <div class="form-row">
        <button class="button">        
            <span>Insérer une image</span>
        </button>
    </div>
<br>
    <div class="form-row">
      <button class="button" :class="{'button--disabled' : !validatedFields}">
        <span v-if="status == 'loading'">Création en cours...</span>
        <span v-else>Valider</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
input {
    text-align: center;
}
</style>>