<template>
<div class="card">
    <div class="field">
        <label class="label">Title</label>
        <div class="control">
            <input class="input" type="text" placeholder="Title" v-model="topicTitle"/>
        </div>
    </div>
<br>
    <div class="field">
        <label class="label">Content</label>
        <div class="control">
            <input class="input" type="text" placeholder="Content" v-model="topicContent" style="width:475px; height: 200px;"/>
        </div>
    </div>
<br>
    <button class="button" @click="saveTopic">Valider</button>
</div>
</template>

<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddTopic",
  data() {
    return {
      topicTitle: "",
      topicContent: "",
    };
  },
  methods: {
    // Create New product
    async saveTopic() {
      try {
        await axios.post("http://localhost:5000/newtopics", {
          title: this.topicTitle,
          content: this.topicContent,
        });
        this.topicTitle = "";
        this.topicContent = "";
        this.$router.push("/topicList");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style scoped>
input {
    text-align: center;
}
</style>>