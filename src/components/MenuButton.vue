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
            console.log('in displayMenu');
            this.hideMenu = false
            console.log('hideMenu is now ' + this.hideMenu);
        },
        hideMainMenu() {
            console.log('in hideMainMenu');
            this.hideMenu = true
            console.log('hideMenu is now ' + this.hideMenu);
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
    z-index: 8;
}
.showMainMenu {
    z-index: 9;
    height: 2.5rem;
    width: 2.5rem;
    background-image: url('../assets/graphics/navicon.svg');
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
</style>