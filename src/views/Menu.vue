<template>
  <div class="menu">
      <div class="invisibleFilm" :class="{ noDisplay : hideInvisibleFilm }"/>
      <top/>
      <shopping-basket-button v-on:basket-hidden="hideBasket()"
                              v-on:basket-visible="showBasket()"/>
      <h3>Meny</h3>
      <ul>
        <coffee-menu-item v-for='singleItem in getCoffeeItems'
                          :key="singleItem.id"
                          :menuItem="singleItem"
        />   
      </ul>
      <router-view/>
      <bottom class="bottom"/>
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
    hideInvisibleFilm: this.$store.state.hideInvisibleFilm
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
    hideBasket() {
      this.$router.push('/menu')
      this.$store.state.hideInvisibleFilm = true
    },
    showBasket() {
      this.$router.push('/menu/cart')
      this.$store.state.hideInvisibleFilm = false
    }
  },

  beforeUpdate() {
      console.log('saving data');
      sessionStorage.setItem('storeState',JSON.stringify(this.$store.state))
      this.hideInvisibleFilm = this.$store.state.hideInvisibleFilm
  }
  
}
</script>

<style scoped lang="scss">
.noDisplay {
  display: none;
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 53rem;
  background-color: #F3E4E1;
  .invisibleFilm{
    z-index: 5;
    position: absolute;
    height: 54.8rem;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
  }
  h3 {
    font-family: "PT Serif";
    font-size: 3rem;
    text-align: center;
    margin: 1rem;
  }
  ul {
    padding: 0;
    width: 90%;
  }
}
.bottom {
  margin-top: 8rem;

}  
</style>