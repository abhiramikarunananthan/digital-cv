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

  <div class="weeeveinfo">
    <img alt="Vue logo" class="image" src="@/assets/images/weeeve.png" width="490" height="200"/>

    <div class="info-box">
      <p> Vi brukte blant annet AI-verktøyet ML-kit av google for ansiktsgjennkjenning. Applikasjonen lot brukeren lage  <b class="bold"> egendefinerte GIFs ved å
        velge mellom en håndfull avatarer, ta bilde av seg selv med ulike grimaser, og til
        slutt få sin egendefinert GIF</b> til å dele med venner og familie.
      </p>
      <div class="buttonswhatever">
        <a href="https://play.google.com/store/apps/details?id=online.weeeve" target="_blank" rel="noopener">
          Sjekk ut appen
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped>
@media (max-width: 1023px) {
  .icon{
    vertical-align: middle;
  }
.weeeveinfo{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column; /* Stack items vertically */

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

  .image {
    border-radius: 10px;
    margin-top: 70px;
    height: 150px;
    width: 350px;
    margin-left: 54px;
    align-content: center;
    margin-right: 40px;
  }



  .info-box {
    background-color: #ffffff;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    align-content: center;
    text-align: center;
    justify-content: center;
    width: 80%; /* Adjust width as needed */
    max-width: 600px; /* Example: Set maximum width for the info box */

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
    font-size: 12px;
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
  .project{
    display: none;
  }
  .about{
    display: none;
  }
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .image {
    border-radius: 10px;
    margin-top: 70px;
    margin-left: 54px;
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


  .info-box {
    background-color: #ffffff;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    align-content: center;
    text-align: center;
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
    font-size: 12px;
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
