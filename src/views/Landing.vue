<template>
  <div class="landing">
    <main-menu/>
    <div class="left">
      <img src="@/assets/graphics/intro-graphic-left.svg" alt="">
    </div>
    <div class="center">
      <img src="@/assets/graphics/airbean-landing.svg" alt="">
    </div>
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
  z-index: 2;
  left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.no-display {
  display: none;
}
</style>