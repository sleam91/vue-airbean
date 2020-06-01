<template>

  <div class="status">
    <div class="status-content">
      <div v-if="eta" class="orderNo">
        <p>{{numberTitle}}</p>
        <p class="bold">{{'#AB'+orderNo+'Z'}} </p>
      </div>
      <img src="../assets/graphics/drone.svg" alt="Drone">
      <h1 v-if="eta">{{title}}</h1>
      <h1 v-else>{{titleEmpty}}</h1>
      <div v-if="eta" class="eta">
        <h5 class="bold" v-bind:key="timeToDeliver">{{timeToDeliver}}</h5>
        <h5>{{minutes}}</h5>
      </div>
      <router-link to="/menu">
        <button v-if ="eta" class="btn">{{btn}}</button>
        <button v-else class="btn">{{btnEmpty}}</button>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Status',
  data: () => ({
        numberTitle: "Ordernummer ",
        title: "Din beställning är på väg!",
        titleEmpty: "Du har inte lagt din order än.",
        minutes: " minuter",
        btn: "Ok, cool!",
        btnEmpty: "Jag vill beställa!",
  }),
  computed: {
    orderNo() {
      return this.$store.state.awaitedOrder.orderNo
    },
    eta() {
      return this.$store.state.awaitedOrder.eta
    },
    timeToDeliver() {
      return this.$store.state.timeToDeliver
    }
  }, 
  created() {
    if(this.eta) {
      this.$store.dispatch('startChangingEta')
    }
  }
  beforeRouteLeave (to, from, next) {    
    if(to.name==='Cart'){
      this.$store.commit('showInvisibleFilm')
    }
    next()  
  }
}
</script>

<style scoped lang="scss">
  div.status {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: #E5674E;

    div.status-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 2rem 1.7rem;
      text-align: center;
      color: #fff;
      h1 {
        font-family: 'PT Serif';
        font-size: 1.8rem;
        margin-bottom: 0;
      }
      h5 {
        font-family: 'Work Sans';
        font-size: 1rem;
        font-weight: normal;
        margin: 0 0.1rem 2rem 0.1rem;
      }
      p {
        font-family: 'Work Sans';
        font-size: 0.8rem;
        font-weight: lighter;
        color: rgba(255, 255, 255, 0.7);
        padding: 0 0 1rem 0;
        margin: 1rem 0.1rem 1rem 0.1rem;
      }
      .bold {
        font-weight: bold;
      }
      img {
        width: 11rem;
      }
      div.eta {
        display: flex;
        justify-content: center;
      }
      div.orderNo {
        display: flex;
        justify-content: center;
      }
      button.btn {
        background: #fff;
        width: fit-content;
        border-radius: 1.5rem;
        padding: 0.5rem 1.7rem;
        font-family: 'PT Serif';
        font-size: 1.1rem;
        border: none;

      }
    }
  }
</style>