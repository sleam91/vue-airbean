<template>
  <div class="landing" v-on:click="displayMenu()">
    <main-menu  v-bind:display="displayMainMenu"
                v-on:close-menu="closeMenu()"/>
    <div class="left">
      <img src="@/assets/graphics/intro-graphic-left.svg" alt="">
    </div>
      <img class="center" src="@/assets/graphics/airbean-landing.svg" alt="">
   <div class="right">
     <img src="@/assets/graphics/intro-graphic-right.svg" alt="">
   </div>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'

export default {

  name: 'Landing',

  components: {
    MainMenu
  },

  data() { return {
    displayMainMenu: false
  }},
  
  methods: {
    closeMenu() {
      this.displayMainMenu = false
    },
    displayMenu() {
      this.displayMainMenu = true
    }
  }
}
</script>

<style scoped lang="scss">
.landing {
  display: flex;
  justify-content: space-between;
  background-color: rgb(69, 87, 87);
}
.center {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.no-display {
  display: none;
}
</style>