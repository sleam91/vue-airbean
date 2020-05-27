<template>
  <div class="mainMenu">
        <button type="button" class="exit" v-on:click="$emit('close-menu')">
        </button>
        <router-link :to="'/menu'">
            <h3>Meny</h3>
        </router-link>
         <p>______________________</p>
        <router-link :to="'/about'">
            <h3>Vårt kaffe</h3>
        </router-link>
        <p>______________________</p>
        <router-link :to="'/profile'">
            <h3>Min profil</h3>
        </router-link>
        <p>______________________</p>
        <router-link :to="'/status'">
            <h3>Orderstatus</h3>
        </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scope lang="scss">
.mainMenu {
    z-index: 10;
    position: absolute;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2F2926;
    h3 {
        font-size: 2rem;
    }
    p {
        font-size: 0.1rem;
    }
    p, h3 {
        color: white;
        margin: 0.3rem;
    }

}
.exit {
    height: 2.5rem;
    width: 2.5rem;
    background-image: url('../assets/graphics/close.svg');
    background-size: 1.1rem;
    background-repeat: no-repeat;
    background-position: center;
    padding: none;
    margin: none;
    box-shadow: none;
    position: absolute;
    left: 1rem;
    top: 1rem;
    background-color: white;
    border: none;
    border-radius: 50%;
    outline: none;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>