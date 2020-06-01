<template>
    <div id="app">
        <div v-if="$store.state.loader" class="loader">
            <img id="loader-icon" :src="require('@/assets/graphics/loader.png')" alt />
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    created() {
        if (sessionStorage.getItem("storeState") !== null) {
            this.$store.replaceState(
                JSON.parse(sessionStorage.getItem("storeState"))
            );
        }
    }
};
</script>
<style lang="scss">
body {
    margin: 0;
    padding: 0;
    #app {
        width: 100vw;
        .loader {
            z-index: 100;
            position: fixed;
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
}
#loader-icon {
    z-index: 101;
    width: 6rem;
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
