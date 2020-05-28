<template>
    <div class="shoppingButton">
        <button class="basketButton" @click="showHideBasket()">
            <div class="amountBubble" v-if="getAmountOfItems>0">
                <p class="amountText">{{getAmountOfItems}}</p>
            </div>
        </button>
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
    },
    computed: {
        getAmountOfItems() {
            return this.$store.state.order.items.map(item => item.amount).reduce((a,b) => a+b, 0)
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
        .amountBubble{
            width: 0.9rem;
            height: 0.9rem;
            border: none;
            border-radius: 50%;
            position: relative;
            bottom: 0.9rem;
            left: 1.5rem;
            background-color: red;
            display: flex;
            justify-content: center;
            align-items: center;
            .amountText{
                margin: 0;
                padding: 0;
                text-align: center;
                font-size: 0.5rem;
                color: white;
            }
        }
    }
}    
.noDisplay {
    display: none;
}
</style>