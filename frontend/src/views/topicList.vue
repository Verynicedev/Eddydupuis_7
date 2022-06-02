<template>
<div class="card">
  <!-- <h1 class="card__title">Liste des postes</h1> -->
  <div class="form-row">
    <router-link to="/createTopic"><button class="button">
    <span v-if="status == 'loading'">Création en cours...</span>
    <span v-else>Créer un post</span>
    </button></router-link>
  </div>
  <br>
  <div class="card">
    <!-- <router-link :to="{ name: 'Create' }" class="button is-success mt-5">Add New</router-link> -->
    <div class="form-row">
      <h1 class="card__title">Liste des postes</h1>
      <tr v-for="item in items" :key="item.topicId">
      <div class="cardTitle">{{ item.title }}</div>
      <!-- <td><router-link :to="{ name: 'Edit', params: { id: item.product_id } }" class="button is-info is-small">Edit</router-link>
      <a class="button is-danger is-small" @click="deleteProduct(item.product_id)">Delete</a>
      </td> -->
      </tr>
    </div>
  </div>
</div>
</template>

<script>
// import router from "../router";
import { mapState } from 'vuex'
import axios from "axios";


export default {
  name: "topicList",
  data: function () {
    return {
      items: [],
    };
  },

  created() {
    this.getTopics();
  },
 
  methods: {
    // Get All Products
    async getTopics() {
      try {
        const response = await axios.get("http://localhost:5000/topics");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    // async deleteTopic(id) {
    //   try {
    //     await axios.delete(`http://localhost:5000/topics/${id}`);
    //     this.getTopics();
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },

  ...mapState(['status'])

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  max-width: 100%;
  width: 1000px;
  background:white;
  border-radius: 16px;
  padding:32px;
}

.cardTitle {
  max-width: 100%;
  background:#2196F3;
  color: white;
  border-radius: 16px;
  padding:10px;
  margin: 10px;
  text-align: center;
}
</style>>
