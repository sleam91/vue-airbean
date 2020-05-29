<template>
    <div class="menuButton">
        <button class="showMainMenu"    :class="{ noDisplay : !hideMenu}"
                                        v-on:click="displayMenu"/>
        <main-menu  :class="{ noDisplay : hideMenu}"
                    v-on:close-menu="hideMainMenu"/>
    </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'

export default {

    data(){return{
        hideMenu : true
    }},

    methods: {
        displayMenu() {
            this.hideMenu = false
        },
        hideMainMenu() {
            this.hideMenu = true
        }
    },

    components: {
        MainMenu
    }
}
</script>

<style scoped lang="scss">
.noDisplay {
    display: none;
}
.menuButton{
    z-index: 3;
}
.showMainMenu {
    z-index: 4;
    height: 4.3rem;
    width: 4.3rem;
    background-image: url('../assets/graphics/navicon.svg');
    background-size: 1.5rem;
    background-repeat: no-repeat;
    background-position: center;
    padding: none;
    margin: none;
    box-shadow: none;
    position: absolute;
    left: 1.5rem;
    top: 1.5rem;
    background-color: white;
    border: none;
    border-radius: 50%;
    outline: none;
}
</style>