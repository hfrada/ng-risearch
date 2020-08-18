<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <finput placeholder="Test">This is a banner!</finput>
    <div>
      <button @click="modal = true">modal</button>
      <fmodal :open="modal" @onclose="modal = false">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </fmodal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Finput from '@/components/Finput.vue'
import Fmodal from '@/components/Fmodal.vue'

export default {
  name: 'Home',
  components: {
    Finput,
    Fmodal
  },
  data () {
    return {
      modal: false
    }
  }
}
</script>
