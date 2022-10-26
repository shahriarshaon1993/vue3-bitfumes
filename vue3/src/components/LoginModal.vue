<template>
  <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white px-5 py-5 rounded shadow">
        <div class="w-full max-w-md space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company" />
            <h2 class="
                mt-6
                text-center text-3xl
                font-bold
                tracking-tight
                text-gray-900
              ">
              Sign in to your account
            </h2>
            <!-- Login with google -->
            <GoogleLogin @close-login-from-google="close"/>
          </div>
          <form class="mt-8 space-y-6" @submit.prevent="submit">
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input ref="emailRef" v-model="email" id="email-address" name="email" type="email" autocomplete="email"
                  required="" class="
                    relative
                    block
                    w-full
                    appearance-none
                    rounded-none rounded-t-md
                    border border-gray-300
                    px-3
                    py-2
                    text-gray-900
                    placeholder-gray-500
                    focus:z-10
                    focus:border-indigo-500
                    focus:outline-none
                    focus:ring-indigo-500
                    sm:text-sm
                  " placeholder="Email address" />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
                  required="" class="
                    relative
                    block
                    w-full
                    appearance-none
                    rounded-none rounded-b-md
                    border border-gray-300
                    px-3
                    py-2
                    text-gray-900
                    placeholder-gray-500
                    focus:z-10
                    focus:border-indigo-500
                    focus:outline-none
                    focus:ring-indigo-500
                    sm:text-sm
                  " placeholder="Password" />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="
                    h-4
                    w-4
                    rounded
                    border-gray-300
                    text-indigo-600
                    focus:ring-indigo-500
                  " />
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
              </div>
            </div>

            <div>
              <button type="submit" class="
                  group
                  relative
                  flex
                  w-full
                  justify-center
                  rounded-md
                  border border-transparent
                  bg-indigo-600
                  py-2
                  px-4
                  text-sm
                  font-medium
                  text-white
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-500
                  focus:ring-offset-2
                ">
                <span v-if="!isLoading">Sign in</span>
                <span v-else>Sign in...</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import GoogleLogin from "../components/Login/GoogleLogin.vue";

export default {
  components: { GoogleLogin },
  data() {
    return {
      email: 'shaon@gmail.com',
      password: '123456',
      isLoading: false
    }
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
  methods: {
    submit() {
      const auth = getAuth();
      this.isLoading = true;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          // ...
          this.email = "";
          this.password = "";
          console.log(userCredential);
          this.isLoading = false;
          this.close();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode + " - " + errorMessage);
          this.isLoading = false;
        });
    },

    close() {
      this.$emit('close-login');
    }
  }
};
</script>

<style>

</style>