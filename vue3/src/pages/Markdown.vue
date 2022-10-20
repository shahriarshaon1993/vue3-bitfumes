<template>
    <div class="flex flex-wrap w-full">
        <h1 class="w-full text-center text-3xl mb-4">Markdown App</h1>
        <section class="flex m-auto w-10/12 h-screen">
            <article class="w-1/2 border">
                <textarea class="w-full h-full" :value="text" @input="update"></textarea>
            </article>
            <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
        </section>
    </div>
</template>

<script>
import { marked } from 'marked';
import debounce from '../utilities/mixins/debounce';

export default {
    beforeCreate() {
        console.log("Before create");
    },
    created() {
        console.log("Created");
    },
    beforeMount() {
        console.log("Before mount");
    },
    mounted() {
        console.log("Mounted");
    },
    beforeUnmount() {
        console.log("Before unmount");
    },
    unmounted() {
        console.log("Unmounted");
    },
    beforeUpdate() {
        console.log("Before update");
    },
    updated() {
        console.log("Updated");
    },

    mixins: [debounce],
    data() {
        return {
            text: ""
        }
    },
    methods: {
        update(e) {
            const task = () => (this.text = e.target.value);
            this.debounce(task, 500);
        }
    },
    computed: {
        markedText() {
            return marked(this.text);
        }
    }
}
</script>

<style>

</style>