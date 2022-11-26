import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import FutbolComponent from './components/FutbolComponent.vue';
import BasketComponent from './components/BasketComponent.vue';

const routes = [

    {
        path: "/", component:HomeComponent
    },
    {
        path: "/futbol", component:FutbolComponent
    },
    {
        path: "/basket", component:BasketComponent
    }
    

]

const router = new createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router;