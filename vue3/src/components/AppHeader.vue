<template>
    <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <div class="flex items-center">
                <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li v-for="item in lists" :key="item.to">
                        <router-link :to="item.to" class="text-gray-900 dark:text-white hover:underline"
                            aria-current="page">
                            {{ item.title }}
                        </router-link>
                    </li>

                    <button v-if="isLoggedIn" class="text-white" @click="logout">Logout</button>
                    <button v-else class="text-white" @click="$emit('open-login-modal')">Login</button>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
    data() {
        return {
            lists: [
                { title: "Home", to: "/" },
                { title: "Dc Heros", to: "/dc-heros" },
                { title: "Calender", to: "/calender" },
                { title: "Markdown", to: "/markdown" },
                { title: "Carousel", to: "/carousel" },
                { title: "Calculator", to: "/calculator" },
                { title: "Modal", to: "/reuseable-modal" },
                { title: "Chat", to: "/chat" },
            ]
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn;
        }
    },
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                console.log('Logout successfully')
            }).catch((error) => {
                console.log(error)
            });
        }
    }
}
</script>

<style>

</style>