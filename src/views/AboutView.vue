
<script setup>
import {RouterLink} from "vue-router";
</script>
<template>
  <nav>
    <RouterLink to="/about">Om meg
      <img alt="about_logo" class="about" src="@/assets/images/woman.svg" width="30" height="30" />
    </RouterLink>
    <RouterLink to="/projects">Prosjekter
      <img alt="projects_logo" class="project" src="@/assets/images/projects.svg" width="25" height="25" />
    </RouterLink>
    <a href="https://no.linkedin.com/in/abhirami-karunananthan-b81a5522a?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener">
      <span class="linkedin-text">LinkedIn </span>
      <img alt="LinkedIn logo" class="icon" src="@/assets/images/linkedin.svg" width="20" height="20" />
    </a>
  </nav>
  <div>
    <div id="about">
      <h1>Om meg:</h1>
      <p>Jeg heter <b class="bold">Abhirami Karunananthan</b> og er 23 år. For øyeblikket er jeg sisteårsstudent innen
        bachelor i <b class="bold">dataingeniør</b> ved <b class="bold">NTNU Trondheim</b>. Min lidenskap for teknologi og utvikling er det
        som drev meg til å velge dette studieprogrammet. Gjennom mine akademiske opplevelser har jeg
        utviklet solid kunnskap innenfor  <b class="bold">programmering</b>, samtidig som jeg kontinuerlig søker nye
        utfordringer og muligheter for <b class="bold">faglig vekst</b>. <b class="big"> <br>Ta kontakt dersom du føler arbeidsplassen din  passer meg!</b> </p>
    </div>

    <div id="inforow">
      <div class="information">
        <h1> Programmeringsspråk:</h1>
        <p> Java, Python, Kotlin,<br/> Javascript, C++ & SQL </p>
      </div>
      <div class="information">
        <h1>Kontakt:</h1>
        <p> Tlf: 40851669 <br/>
          Email: k_abhirami@hotmail.com</p>
      </div>
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

  #about {
    background-color: #fed9ca;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
  }

  .information {
    font-size: 14px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
  }

  p {

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

  .bold {
    font-weight: bold;
  }

  .big {
    font-size: 18px;
    font-weight: bold;
  }

  h1 {
    font-weight: bold;
    font-size: 15px;
  }

  #inforow {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin: 20px;
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

    #about{
      background-color: #fed9ca;
      padding: 20px;
      border-radius: 10px;
      margin: 20px;
    }

    .information{
      font-size: 14px;
      background-color: #ffffff;
      padding: 10px;
      border-radius: 10px;
    }
    p{

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

    .bold{
      font-weight: bold;
    }

    .big{
      font-size: 18px;
      font-weight: bold;
    }
    h1{
      font-weight: bold;
      font-size: 15px;
    }

    #inforow{
      display: flex;
      flex-direction: row;
      gap: 100px;
      align-items: center;
      justify-content: center;
      margin: 20px;
    }

    .linkedin-text {
      display: none;
    }


}
</style>
