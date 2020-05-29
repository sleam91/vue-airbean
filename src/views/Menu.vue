<template>
  <div class="menu">
      <div class="invisibleFilm" :class="{ noDisplay : hideInvisibleFilm }"/>
      <top/>
      <shopping-basket-button v-on:basket-hidden="hideInvFilm()"
                              v-on:basket-visible="showInvFilm()"/>
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
  data(){return{
    hideInvisibleFilm: true
  }},

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
  },

  methods: {
    hideInvFilm() {
      this.hideInvisibleFilm = true
    },
    showInvFilm() {
      this.hideInvisibleFilm = false
    }
  }
  
}
</script>

<style scoped lang="scss">
.noDisplay {
  display: none;
}
.menu {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #F3E4E1;
  .invisibleFilm{

    z-index: 5;
    position: absolute;
    height: 116%;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
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