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
        <p>Da jeg startet på dataingeniørstudiet, hadde jeg aldri trodd at jeg etter kun to år skulle
          være med på å lansere en app på Google Play Store. Dette er uten tvil noe jeg er stolt av å ha
          fått til på så kort tid. Da jeg var intern hos Zedge Europe AS i fjor sommer, fikk jeg gleden av
          å lære meg Kotlin og med medstudenter lansere en applikasjon på kun et par uker over sommeren, til tross for
          manglende forkunnskaper i Kotlin. </p>
      </div>
      <RouterLink class="buttons" to="/weeeve">Weeeve</RouterLink>
    </div>
    <div class="innercontainer">
      <div class="informationtext">
        <p> Oppvokst i et hjem der selv den minste matrest ble verdsatt og matsvinn var betraktet som så godt som ulovlig, ble jeg tidlig bevisstgjort viktigheten av å bevare ressurser. Derfor sto et prosjekt vi gjennomførste i et fag på studie meg nær hjertet, og det var ekstra spennende å jobbe med. Gjennom prosjektet fikk jeg muligheten til å lage en applikasjon for å
          bekjempe matsvinn, med mine medstudenter. </p>
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
    min-height: 300px;
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
