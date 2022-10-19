<template>
  <h1>DC Heros</h1>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="`hero-${index}`">
      {{ index }}: {{ hero.name }}
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        dcHeros: [
          { name: "SuperGirl" },
          { name: "Flash" }, 
          { name: "Arrow" },
          { name: "Batman" },
          { name: "Superman" }
        ]
      }
    }
  };
</script>