<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="grey">{{ msg }}</h1>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}



@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
@media (max-width: 1023px) {
  .greetings h1,
  .greetings h3 {
    text-align: center;
    font-size: 2rem;
  }
}
</style>
