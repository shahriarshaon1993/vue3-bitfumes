<template>
  <AppHeader @open-login-modal="isLoginOpen = true" />

  <div class="w-full flex">
    <router-view></router-view>
  </div>

  <Teleport to="#app">
    <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </Teleport>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoginModal from './components/LoginModal.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  components: { AppHeader, LoginModal },
  data() {
    return {
      isLoginOpen: false
    }
  },
  mounted() {
    console.log(this.$store.state);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  }
};
</script>