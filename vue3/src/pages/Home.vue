<template>
    <div class="m-auto">
        <h1 class="text-3xl text-center">Welcome To Vue3 Tutorial</h1>
    </div>
</template>

<script>
import store from '../store';

export default {
    data() {
        return {
            store: this.$store.state
        }
    }
}
</script>