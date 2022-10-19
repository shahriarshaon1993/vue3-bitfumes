<template>
  <h1>DC Heros - {{ herosCount }}</h1>

  <h2>{{ fullname }}</h2>

  <h2>{{ fname }} {{ lname }}</h2>

  <h3>{{ randC }}</h3>
  <h3>{{ randC }}</h3>
  <h3>{{ randM() }}</h3>
  <h3>{{ randM() }}</h3>

  <ul>
    <li v-for="(hero, index) in dcHeros" :key="`hero-${index}`">
      {{ ++index }}: {{ hero.name }}
    </li>
  </ul>

  <!-- <input type="text" v-model="newHero"> -->
  <!-- <input type="text" v-model.trim="newHero"> -->
  <!-- <textarea v-model.lazy="newHero"></textarea> -->
  <!-- <input v-model.number="newHero"> -->
  <!-- <input v-model="newHero">
  <button @click="newHero = 'Wonder woman'">Add Hero</button> -->

  <form @submit.prevent="addHero">
    <input v-model="newHero" placeholder="Type hero name here">
    <button type="submit">Add Hero</button>
  </form>
  <small>Total heros in the list is: {{ herosCount }}</small>

  <br>
  
  <div>
    <button @click="setFullName">Set Full Name</button>
  </div>

</template>

<script>
  export default {
    computed: {
      herosCount() {
        return this.dcHeros.length;
      },
      randC() {
        return Math.random();
      },
      fullname: {
        get() {
          return `Full name: ${this.fname} ${this.lname}`;
        },
        set(fullname) {
          const values = fullname.split(" ");
          this.fname = values[0];
          this.lname = values[1];
        }
      }
    },
    methods: {
      addHero() {
        if(this.newHero !== '') {
          this.dcHeros.unshift({ name: this.newHero });
          this.newHero = "";
        }else {
          alert("Hero name required");
        }
      },
      randM() {
        return Math.random();
      },
      setFullName() {
        this.fullname = "Bitfumes Tutorial"
      }
    },
    data() {
      return {
        newHero: "",
        fname: "Shahriar",
        lname: "Shaon",
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