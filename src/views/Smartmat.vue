<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/about">Om meg</RouterLink>
    <RouterLink to="/projects">Prosjekter</RouterLink>
    <a href="https://no.linkedin.com/in/abhirami-karunananthan-b81a5522a?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener">
      <img alt="LinkedIn logo" class="icon" src="@/assets/images/linkedin.svg" width="20" height="20" />
    </a>
  </nav>

  <div>
  <div>
    <section>
      <iframe class="video" width="373" height="210" src="https://www.youtube.com/embed/Izn5Xqr5V6g?si=BahRYrsWO2ayTSqa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </section>
  </div>
    <div class="text-box">
    <h1>
      Formålet med applikasjonen var å <h2>redusere matsvinn ved å tilby brukerne muligheten til å generere
      matretter basert på tilgjengelige restematvarer i deres kjøleskap.</h2> Smartmat ble designet med
      responsivt grensesnitt som tilpasser seg både mobiltelefoner og datamaskiner, noe som gir en dynamisk
      brukeropplevelse på ulike enheter. Sjekk ut repoene:
    </h1><a href="https://gitlab.stud.idi.ntnu.no/idatt2106-v23-12/idatt2106_2023_12-frontend" target="_blank" rel="noopener">
      <h3> frontend </h3>
    </a>
      <a href="https://gitlab.stud.idi.ntnu.no/idatt2106-v23-12/idatt2106_2023_12-backend" target="_blank" rel="noopener">
        <h9> backend </h9>
      </a>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1000px) {
  header {
    line-height: 1.5;
    max-height: 100vh;
  }
  video{
    margin-top: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  }
  h3, h9{
    background-color: #fed9ca;
    flex: 1; /* Each container takes up equal space */
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    margin: 10px;
    color: #ffffff;
    font-weight: bold;
    display: inline-block;
  }
  h3:hover, h9:hover{
    font-size: 16px;
    margin: 10px;
  }
  h1, h3, h9{
    font-size: 15px;
  }
  .text-box{
    background-color: #ffffff;
    margin-top: 10px;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
  h2{
    font-weight: bold;
    font-size: 15px;
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