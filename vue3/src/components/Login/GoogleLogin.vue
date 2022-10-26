<template>
    <section>
        <p class="mt-2 text-center text-sm text-gray-600">
            <button @click="loginWithGoogle" class="
                    bg-transparent 
                    hover:bg-blue-500 
                    text-blue-700 
                    font-semibold 
                    hover:text-white 
                    py-2 px-4 border mt-5
                    border-blue-500 
                    hover:border-transparent 
                    rounded">Login With Google</button>
        </p>
    </section>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
    methods: {
        loginWithGoogle() {
            const provider = new GoogleAuthProvider();

            const auth = getAuth();
            signInWithPopup(auth, provider).then((res) => {
                this.$emit('close-login-from-google');
            });
        },
    }
}
</script>

<style>

</style>