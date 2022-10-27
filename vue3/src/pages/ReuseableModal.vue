<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
        <h2 class="text-2xl my-5">Re-useable Modal</h2>
        <button @click="isModal1Open = true" class="mr-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Modal 1
        </button>
        
        <button @click="isModal2Open = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Modal 2
        </button>

        <!-- Modal here -->
        <Modal v-if="isModal1Open" @close="isModal1Open = false">
            <template #title>
                Modal 1
            </template>
            <template #body>
                <p>This is a modal 1</p>
            </template>
        </Modal>

        <Modal v-if="isModal2Open" @close="isModal2Open = false">
            <template #title>
                Modal 2
            </template>
            <template #body>
                <p>This is a modal 2</p>
            </template>
        </Modal>
    </div>
  </section>
</template>

<script>
import Modal from '../components/Modal.vue'
import { ref } from 'vue';

export default {
  components: { Modal },

  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);

    return {
        isModal1Open,
        isModal2Open
    }
  }
}
</script>

<style>

</style>