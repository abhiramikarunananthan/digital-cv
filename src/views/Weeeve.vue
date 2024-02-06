<script setup>
import { RouterLink } from "vue-router";

</script>

<template>
  <nav>
    <RouterLink to="/about">Om meg</RouterLink>
    <RouterLink to="/projects">Prosjekter</RouterLink>
    <a href="https://no.linkedin.com/in/abhirami-karunananthan-b81a5522a?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener">
      <img alt="LinkedIn logo" class="icon" src="@/assets/images/linkedin.svg" width="20" height="20" />
    </a>
  </nav>

  <div class="weeeve">
    <img alt="Vue logo" class="image" src="@/assets/images/weeeve1.png" width="485" height="200" />

    <div class="info-box">
      <h9> Vi brukte blant annet AI-verktøyet ML-kit av google for ansiktsgjennkjenning og ikke minst cameraX. Applikasjonen lot brukeren lage egendefinerte GIFs ved å velge mellom en håndfull avatarer, ta bilde av seg selv med ulike grimaser, og til slutt få sin egendefinert GIF til å dele med venner og familie. <br> <a href="https://play.google.com/store/apps/details?id=online.weeeve" target="_blank" rel="noopener"><h10>
        Sjekk ut appen
      </h10></a></h9>
    </div>
  </div>

</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .image{
    border-radius: 10px;
    margin-top: 70px;
    margin-left: 54px;
  }

  .info-box h10{
    background-color: #fed9ca;
    border-radius: 10px;
    padding: 10px;
    margin: 15px;
    font-size: 15px;
    color: #ffffff;
    font-weight: bold;
  }
  h10:hover{
    font-size: 16px;
  }
  nav {
    width: 100%;
    font-size: 12px;
    text-align: end;
    margin-top: 4rem;
    position: fixed;
    top: 0;
    right: 0;
  }


  .info-box{
    background-color: #ffffff;
    border-radius: 10px;
    margin: 20px;
    padding: 15px;
    align-content: center;
    text-align: center;
    font-size: 20px;
  }
  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav {
    text-align: right;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
