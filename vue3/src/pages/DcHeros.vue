<template>
    <div class="m-auto">
        <h1 class="text-2xl text-center">DC Heros - {{ herosCount }}</h1>

        <ul>
            <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">
                <div>
                    {{ hero.name }}
                </div>
                <button @click="remove(index)">x</button>
            </li>
        </ul>

        <form class="mt-10" @submit.prevent="addHero">
            <input class="border rounded py-2 px-4" v-model="newHero" placeholder="Type hero name here">
            <button class="bg-blue-500 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add
                Hero</button>
        </form>
    </div>
</template>

<script>
export default {
    computed: {
        herosCount() {
            return this.dcHeros.length;
        }
    },
    methods: {
        addHero() {
            if (this.newHero !== '') {
                this.dcHeros.unshift({ name: this.newHero });
                this.newHero = "";
            } else {
                alert("Hero name required");
            }
        },
        remove(index) {
            this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
        }
    },
    data() {
        return {
            newHero: "",
            dcHeros: [
                { name: "SuperGirl" },
                { name: "Flash" },
                { name: "Arrow" },
                { name: "Batman" },
                { name: "Superman" }
            ]
        }
    }
}
</script>

<style>

</style>