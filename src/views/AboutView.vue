
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
  <div class="about">
    <h1>Jeg heter Abhirami Karunananthan og er for øyeblikket sisteårsstudent innen bachelor i dataingeniør ved NTNU Trondheim. Min lidenskap for teknologi og utvikling er det som drev meg til å velge dette studieprogrammet. Gjennom mine akademiske opplevelser har jeg utviklet solid kunnskap innenfor  programmering, samtidig som jeg kontinuerlig søker nye utfordringer og muligheter for faglig vekst. Jeg er dedikert til å bidra til innovasjon og teknologisk fremgang, og ser frem til å anvende mine ferdigheter og lidenskap i en profesjonell setting.</h1>
    <h2> Programmeringsspråk:
      <h3> Java, Python, Kotlin,<br/> Javascript, C++ & SQL </h3></h2>
  </div>
  <h4>Kontakt:
    <h5> Tlf: 40851669 <br/>
      Email: k_abhirami@hotmail.com</h5></h4>
</template>

<style>

@media (min-width: 1024px) {
  header {
    line-height: 1.5;
    max-height: 100vh;
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

  .about h1 {
    display: flex;
    align-items: center;
    background-color: #fed9ca;
    color: #363636;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 20px;
    font-size: 18px;
  }



  .about h2 {
    background-color: #ffffff;
    color: #7d7d7d;
    font-size: 15px;
    font-weight: bold;
    position: fixed;
    border-radius: 1000px;
    padding: 20px;

  }
  h4 {
    background-color: #ffffff;
    color: #7d7d7d;
    font-size: 15px;
    font-weight: bold;
    position: fixed;
    border-radius: 1000px;
    padding: 20px;
    right: 13%;
    bottom: -1%;

  }

  .about h3 {
    background-color: #ffffff;
    color: #7d7d7d;
    font-size: 15px;
    border-radius: 100%;
  }
   h5 {
    background-color: #ffffff;
    color: #7d7d7d;
    font-size: 15px;
     right: 0;
     bottom: 0;
    border-radius: 100%;
  }
}
</style>
