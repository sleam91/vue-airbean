<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    async created() {
        if(sessionStorage.getItem('storeState')!==null) {
            this.$store.replaceState(JSON.parse(sessionStorage.getItem('storeState')))
        }
    }
}
</script>
<style lang="scss">
body {
    margin: 0;
    padding: 0;
    #app{
      width:100vw;
    }
}
</style>
