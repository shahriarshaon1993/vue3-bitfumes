<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <Transition>
        <div v-if="currentSlide === index" :class="color" style="height: 350px"></div>
      </Transition>
    </div>
    <div class="w-full" style="height: 340px;">
      <div class="absolute bottom-2 w-full flex justify-center">
        <div 
          v-for="(slider, index) in sliders" :key="slider"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 rounded-full mx-2 cursor-pointer shadow-md"
        ></div>
      </div>
    </div>
    <!-- <div class="my-10 flex w-full">
      <div class="m-auto">
        <Transition>
          <h1 v-if="isTitleShowing">My Slider</h1>
        </Transition>
        <button @click="isTitleShowing = !isTitleShowing" class="px-4 py-2 border mt-5">Toggle text</button>
      </div>
    </div> -->
  </div>

</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-teal-600"],
      interval: "",
      isTitleShowing: true
    }
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>