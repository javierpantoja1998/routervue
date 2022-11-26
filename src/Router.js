//Importamos createRouter y createWebHistory
import { createRouter, createWebHistory } from "vue-router";
//Importamos los componentes que vamos a enrutar
import HomeComponent from './components/HomeComponent.vue';
import FutbolComponent from './components/FutbolComponent.vue';
import BasketComponent from './components/BasketComponent.vue';

//Creamos la constante rutas con cada una de las rutas hacia cada componente
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

//Construimos el router y definimos su historial y sus rutas
const router = new createRouter({
    history:createWebHistory(),
    routes:routes
});

//Exportamos el router para poder ser usado
export default router;