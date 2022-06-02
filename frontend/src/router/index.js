import { createRouter, createWebHashHistory } from "vue-router";
// import logIn from "/views/logIn.vue";
import userProfile from "@/views/userProfile.vue";
import topicList from "@/views/topicList.vue";
import createTopic from "@/views/createTopic.vue";

const routes = [
    {
        name: "logIn",
        path: "/",
        component: () => import("../views/logIn"),
    }, 

    {
        name: "userProfile",
        path: "/userProfile",
        // component: () => import("../views/userProfile"),
        component: userProfile,
        props:true
    },

    {
        name: "topicList",
        path: "/topicList",
        component: topicList,
    },
    
    {
        name: "createTopic",
        path: "/createTopic",
        component: createTopic,
    }   
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router