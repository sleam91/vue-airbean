<template>
  <div class="menu">
    <top/>
    <div class="center">
      <h3>Meny</h3>
      <ul>
        <coffee-menu-item v-for='singleItem in getCoffeeItems'
                          :key="singleItem.id"
                          :menuItem="singleItem"
        />   
      </ul>
    </div>
    <bottom/>
  </div>
</template>

<script>
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'
import CoffeeMenuItem from '@/components/CoffeeMenuItem'

export default {
  name: 'Menu',
  components: {
    Top,
    Bottom,
    CoffeeMenuItem
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #F3E4E1;
  .center{
    h3 {
      font-size: 3rem;
      text-align: center;
      margin: 1rem;
    }
    ul {
      padding: 1rem;
    }
  }
}
</style>