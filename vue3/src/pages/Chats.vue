<template>
    <section>
        <!-- <div v-for="chat in chats" :key="chat.message">{{ chat.message }}</div> -->
    </section>
</template>

<script>
import { getDatabase, ref, child, get } from "firebase/database";
import { onMounted } from "vue";

export default {
    setup() {
        onMounted(() => {
            const db = ref(getDatabase());
            get(child(db, `chats`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        });
    }
}
</script>

<style>

</style>