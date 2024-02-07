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
  <div class="container">
    <div class="innercontainer">
      <div class="informationtext">
        <p>Da jeg i fjor sommer var intern hos Zedge Europe AS, fikk jeg
          gleden av å lære meg kotlin, lansere en app på google play store og ikke minst lære av dyktige
          medstudenter. </p>
      </div>
      <RouterLink class="buttons" to="/weeeve">Weeeve</RouterLink>
    </div>
    <div class="innercontainer">
      <div class="informationtext">
        <p> Gjennom et skole prosjekt i faget systemutvikling 2 fikk jeg muligheten til å lage en applikasjon for å
          bekjempe matsvinn med
          medstudentene mine. Vi tok i bruk den effektive scrum metodikken gjennom prosjektet, og dette førte til et godt
          og effektivt samarbeid</p>
      </div>
      <RouterLink class="buttons" to="/smartmat">Smartmat</RouterLink>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .container {
    display: flex;

  }

  .innercontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .informationtext {
    flex: 1;
    background-color: #ffffff;
    border-radius: 10%;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    font-size: 14px;
    max-width: 400px;
    min-height: 220px;
  }

  .buttons {
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
    font-size: 16px;
    font-weight: bold;
    align-content: center;
    max-width: 126px;
    text-align: center;
  }

  .buttons:hover {
    background-color: #b2968b;
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
