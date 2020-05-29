<template>
  <div class="landing">
    <div class="invisibleClickForMenu"  v-on:click="displayMenu" 
                                        v-bind:class="{ noDisplay : !hideMenu}"></div>
    <main-menu  v-bind:key="hideMenu"
                v-bind:class="{ noDisplay : hideMenu}"
                v-on:close-menu="closeMenu"/>
    
    <img class="left" src="@/assets/graphics/intro-graphic-left.svg" alt="">
    <img class="center" src="@/assets/graphics/airbean-landing.svg" alt="">
    <img class="right" src="@/assets/graphics/intro-graphic-right.svg" alt="">
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
    hideMenu : true
  }},
  
  methods: {
    closeMenu() {
      this.hideMenu = true
    },
    displayMenu() {
      this.hideMenu = false
    }
  }
}
</script>

<style scoped lang="scss">
.noDisplay {
    display: none;
}
.landing {
  z-index: 1;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: rgb(69, 87, 87);
}
.center {
  height: 7rem;
  position: absolute;
  top: 53%;
  left: 53%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.no-display {
  display: none;
}
.left, .right {
    height: 100%;
    object-fit: cover;
}
.invisibleClickForMenu {
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>