import { createRouter, createWebHashHistory } from "vue-router";
// import logIn from "/views/logIn.vue";
import userProfile from "@/views/userProfile.vue";

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
    }           
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router