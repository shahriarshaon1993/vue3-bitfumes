<template>
  <AppHeader/>
  
  <div class="w-full flex">
    <!-- <DcHeros /> -->
    <Calender />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import Calender from './components/Calender.vue';
// import DcHeros from './components/DcHeros.vue';

export default {
  components: { AppHeader, Calender },
};
</script>