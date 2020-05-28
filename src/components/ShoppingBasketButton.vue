<template>
    <div class="shoppingButton">
        <button class="basketButton" @click="showHideBasket()"/>
        <shopping-basket :class="{ noDisplay : hideBasket }"/>
    </div>
</template>

<script>
import ShoppingBasket from '@/components/ShoppingBasket'

export default {
    data() {return{
        hideBasket : true
    }},

    components: {
        ShoppingBasket
    },

    methods: {
        showHideBasket() {
            this.hideBasket = !this.hideBasket
        }
    }
}
</script>

<style scoped lang="scss">
.shoppingButton {
    .basketButton {
        z-index: 7;
        height: 2.5rem;
        width: 2.5rem;
        background-image: url('../assets/graphics/bag.svg');
        background-size: 1.1rem;
        background-repeat: no-repeat;
        background-position: center;
        padding: none;
        margin: none;
        box-shadow: none;
        position: absolute;
        right: 1rem;
        top: 1rem;
        background-color: #2F2926;
        border: none;
        border-radius: 50%;
        outline: none;
    }
}    
.noDisplay {
    display: none;
}
</style>