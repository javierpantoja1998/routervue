<template>
    <!-- Creamos el navbar para el menu de navegación -->
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- Creamos la primera ruta para el componente Home -->
        <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              HOME
            </router-link>
          </li>
          <!-- Creamos la segunda ruta para el componente Futbol -->
        <li class="nav-item">       
            <router-link class="nav-link active" aria-current="page" to="/futbol">
            Futbol
            </router-link>
        </li>
        <!-- Creamos la tercera ruta para el componente Basket -->
        <li class="nav-item">       
            <router-link class="nav-link active" aria-current="page" to="/basket">
            Basket
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>