<template>
    <div>
        <h1>Real Time Chat..</h1>
    </div>
</template>

<script>
import { getDatabase, ref, onValue } from "firebase/database";
import { onMounted } from '@vue/runtime-core';

export default {
    setup() {
        onMounted(async () => {
            const db = getDatabase();
            const collection = ref(db, 'chats');
            const data = await collection.once('value');
            console.log(data);
        });
    }
}
</script>

<style>

</style>