<template>
    <div class="wrapper">
        <div class="container">
            <h3>Din beställning</h3>
            <ul class="itemsInBasket">
                <shopping-basket-item   v-for="orderItem in getOrderItems"
                                        :key="orderItem.item.id"
                                        :orderItem="orderItem"
                />
            </ul>
            <div class="summary">
                <div class="text">
                    <h2>Total</h2>
                    <p>inkl moms + drönarleverans</p>
                </div>
                <h2>{{getSum}} kr</h2>
            </div>
            <button class="makeOrder" @click="makeOrder()">Take my money!</button>
        </div>
    </div>
</template>

<script>
import ShoppingBasketItem from '@/components/ShoppingBasketItem'

export default {
    components: {
        ShoppingBasketItem
    }, 
    
    computed: {
        getOrderItems() {
            return this.$store.state.order.items
        },
        getSum() {
            let sum = 0
            for (let itemInOrderList of this.$store.state.order.items) {
                sum += itemInOrderList.item.price * itemInOrderList.amount
            }
            return sum
        }
    },
    methods: {
        makeOrder() {
            this.$store.state.order.sum = this.getSum
            this.$store.dispatch('addOrderToUser')
            this.$router.push('/status')
        }
    }

}
</script>

<style scoped lang="scss">
.wrapper {
    top: 0;
    position: absolute;
    z-index: 4;
    width: 100vw;
    height: 112%;
    background-color: rgba(0, 0, 0, 0.7);
    .container {
        z-index: 6;
        position: absolute;
        top: 13vh;
        left: 5vw;
        background-color: white;
        min-height: 80vh;
        width: 90vw;
        border: none;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
            font-size: 2.2rem;
            margin-top: 3rem;
        }

        .summary {
            display: flex;
            flex-direction: column;
        }
        .makeOrder{
            width: 18rem;
            padding: 0 2.5rem;
            height: 3.6rem;
            font-size: 1.5rem;
            font-family: "PT Serif";
            border-radius: 1.8rem;
            color: #ffffff;
            border: none;
            background: #2f2926;
            letter-spacing: 1.2px;
            vertical-align: middle;
        }
    }
}    
</style>