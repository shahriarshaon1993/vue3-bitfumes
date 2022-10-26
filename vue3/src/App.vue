<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />

  <div class="w-full flex">
    <router-view></router-view>
  </div>

  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoginModal from './components/LoginModal.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  components: { AppHeader, LoginModal },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {}
    }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  }
};
</script>