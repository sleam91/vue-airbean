<template>
  <div class="menu">
      <div class="invisibleFilm"/>
      <top/>
      <shopping-basket-button/>
      <h3>Meny</h3>
      <ul>
        <coffee-menu-item v-for='singleItem in getCoffeeItems'
                          :key="singleItem.id"
                          :menuItem="singleItem"
        />   
      </ul>
      <bottom/>
  </div>
</template>

<script>
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'
import CoffeeMenuItem from '@/components/CoffeeMenuItem'
import ShoppingBasketButton from '@/components/ShoppingBasketButton'

export default {
  name: 'Menu',
  components: {
    Top,
    Bottom,
    CoffeeMenuItem,
    ShoppingBasketButton
  },

  computed: {
    getCoffeeItems() {
      return this.$store.state.menu
      
    }
  }
  
}
</script>

<style scoped lang="scss">
.menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #F3E4E1;
  .invisibleFilm{
    position: absolute;
    height: 100vh;
    width: 100vw;
  }
  h3 {
    font-size: 3rem;
    text-align: center;
    margin: 1rem;
  }
  ul {
    padding: 0;
    width: 90%;
  }
}
</style>