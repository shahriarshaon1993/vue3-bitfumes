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
            <input class="border rounded py-2 px-4" v-model="newHero" placeholder="Type hero name here"
                ref="newHeroRef">

            <button class="bg-blue-500 ml-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add
                Hero</button>
        </form>
    </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";

export default {
    setup() {
        const newHeroRef = ref("");
        const newHero = ref("");
        let dcHeros = ref([
            { name: "SuperGirl" },
            { name: "Flash" },
            { name: "Arrow" },
            { name: "Batman" },
            { name: "Superman" }
        ]);

        onMounted(() => {
            newHeroRef.value.focus();
        });

        const herosCount = computed({
            get: () => dcHeros.value.length
        });

        function addHero() {
            if (newHero.value !== '') {
                dcHeros.value.unshift({ name: newHero.value });
                newHero.value = "";
            } else {
                alert("Hero name required");
            }
        }

        function remove(index) {
            dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
        }

        return {
            newHero,
            dcHeros,
            addHero,
            remove,
            newHeroRef,
            herosCount
        }
    }
}
</script>

<style>

</style>