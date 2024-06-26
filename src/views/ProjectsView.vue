<script setup>
import {RouterLink} from "vue-router";

</script>

<template>
  <nav>
    <RouterLink to="/about">Om meg
      <img alt="about_logo" class="about" src="@/assets/images/woman.svg" width="20" height="20" />
    </RouterLink>
    <RouterLink to="/projects">Prosjekter
      <img alt="projects_logo" class="project" src="@/assets/images/projects.svg" width="15" height="15" />
    </RouterLink>
    <a href="https://no.linkedin.com/in/abhirami-karunananthan-b81a5522a?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener">
      <span class="linkedin-text">LinkedIn </span>
      <img alt="LinkedIn logo" class="icon" src="@/assets/images/linkedin.svg" width="10" height="10" />
    </a>
  </nav>
  <div class="container">
    <div class="innercontainer">
      <div class="informationtext">
        <p>Mitt sommerinternship hos Zedge AS var en milepæl,
          hvor jeg på få uker over sommeren fikk muligheten til
          å lære meg Kotlin og sammen med det tverrfaglige teamet
          mitt lansere en applikasjon på Google Play Store. Denne opplevelsen
          fikk meg til å innse min evne til å lære teknologier på kort tid med
          hjelp av dyktige kolleger rundt meg.</p>
      </div>
      <RouterLink class="buttons" to="/weeeve">Weeeve</RouterLink>
    </div>
    <div class="innercontainer">
      <div class="informationtext">
        <p> En av mine favoritt prosjekt jeg fikk gleden av
          å være med på var gjennom et prosjekt i
          faget Systemutvikling 2. Dette prosjektet ga
          meg et realistisk innblikk i arbeidslivet, hvor jeg
          lærte verdien av scrum metodikken og betydningen av
          strukturert samarbeid. Det var en øyeåpnende erfaring
          som styrket min forståelse for teamarbeid og smidig
          arbeidsmetoder. </p>
      </div>
      <RouterLink class="buttons" to="/smartmat">Smartmat</RouterLink>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 1023px) {
  .icon{
    vertical-align: middle;
  }

  .project{
    vertical-align: middle;
    margin-top: 3px;
  }
  .about{
    vertical-align: middle;
    margin-top: 3px;
  }
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
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: white;

  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 20px;
    justify-content: space-around;
    display: flex;
    padding: 1rem 0;
  }

}
@media (min-width: 1024px) {
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .project{
    display: none;
  }
  .about{
    display: none;
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
  .linkedin-text {
    display: none;
  }
}
</style>
