<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/about">Om meg</RouterLink>
    <RouterLink to="/projects">Prosjekter</RouterLink>
    <a href="https://no.linkedin.com/in/abhirami-karunananthan-b81a5522a?original_referer=https%3A%2F%2Fwww.google.com%2F"
       target="_blank" rel="noopener">
      <img alt="LinkedIn logo" class="icon" src="@/assets/images/linkedin.svg" width="20" height="20"/>
    </a>
  </nav>

  <div>
    <div class="videocontainer">
      <section>
        <iframe width="373" height="210" src="https://www.youtube.com/embed/8xcdJja2v3Q?si=NkcfpzNO1FcKddv6"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
                 encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
    </div>
    <div class="text-box">
      <p>
        Formålet med applikasjonen var å <b class="bold">redusere matsvinn ved å tilby brukerne muligheten til å
        generere
        matretter basert på tilgjengelige restematvarer i deres kjøleskap.</b> Smartmat ble designet med
        responsivt grensesnitt som tilpasser seg både mobiltelefoner og datamaskiner, noe som gir en dynamisk
        brukeropplevelse på ulike enheter. Sjekk ut repoene:
      </p>
    </div>
    <div id="buttonrow">
      <div class="buttonswhatever">
        <a href="https://gitlab.stud.idi.ntnu.no/idatt2106-v23-12/idatt2106_2023_12-frontend" target="_blank"
           rel="noopener">
          frontend
        </a>
      </div>
      <div class="buttonswhatever">
        <a href="https://gitlab.stud.idi.ntnu.no/idatt2106-v23-12/idatt2106_2023_12-backend" target="_blank"
           rel="noopener">
          backend
        </a>
      </div>
    </div>


  </div>
</template>

<style scoped>
@media (min-width: 1000px) {
  .videocontainer{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 14px;
  }
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  video {
    margin-top: 30px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  }

  .text-box {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
  }

  #buttonrow{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }


  .buttonswhatever a {
    flex: 1;
    display: inline-block;
    padding: 10px 20px;
    background-color: #fed9ca;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #fff;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 15px;
    font-size: 14px;
    font-weight: bold;
    align-content: center;
    max-width: 126px;
    text-align: center;
  }

  .buttonswhatever a:hover {
    background-color: #b2968b;
  }

  .bold{
    font-weight: bold;
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