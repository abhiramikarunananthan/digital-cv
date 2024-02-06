<script setup>
// Remove all imports for now
import {RouterLink} from "vue-router";
</script>

<template>
  <div>
    <nav>
      <div class="cards">
      <RouterLink to="/about">
        <div class="card">
          Om meg
          <img alt="about logo" class="about woman" src="@/assets/images/woman.svg" width="150" height="150" />
        </div>
      </RouterLink>

      <RouterLink to="/projects">
        <div class="card">
          Prosjekter
          <img alt="projects logo" class="projects" src="@/assets/images/projects.svg" width="130" height="150" />
        </div>
      </RouterLink>
      </div>

    </nav>  </div>
</template>

<style scoped>

.card{
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 20%;
  margin: 10px;
  align-content: center;
  text-align: center;
}

.about{
  background-color: #ffffff;
  border-radius: 20%;
  margin: 10px;
  align-content: center;
  text-align: center;

}

.projects{
  background-color: #ffffff;
  border-radius: 20%;
  margin: 10px;
  align-content: center;
  text-align: center;
}
.projects:hover {
  transform: rotate(2deg); /* Apply a slight rotation on hover */
}
.card:hover {
  transform: rotate(2deg); /* Apply a slight rotation on hover */
}
.about:hover {
  transform: rotate(2deg); /* Apply a slight rotation on hover */


}
.cards{
  font-size: 50px;
  display: flex;
  align-content: center;
  align-items: center;
}

</style>
