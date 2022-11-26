import { createApp } from 'vue'
import App from './App.vue'
//Importamos el router
import router from './Router';

//Creamos una constante para la app
const app = createApp(App);
//Decimos que la app use el router
app.use(router).mount('#app')
