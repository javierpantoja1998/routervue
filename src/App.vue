<template>
  <!-- Metemos el MenuRutas en el template para poder ser visualizado -->
  <MenuRutas/>
  <router-view></router-view>
</template>

<script>
//Importamos el componente de MenuRutas
import MenuRutas from './components/MenuRutas.vue'

export default {
  name: 'App',
  components: {
    //Añadimos dicho componente
    MenuRutas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
