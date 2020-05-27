<template>

  <div class="profile">
    <login v-if="loggedOut"/>

  </div>

</template>

<script>
import Login from '@/components/Login'
export default {
  name: 'Profile',
  components:{
    Login
  },
  data(){
    
      return{
        loggedOut:true
      }
    
  }

  
}
</script>

<style scoped lang="scss">

</style>