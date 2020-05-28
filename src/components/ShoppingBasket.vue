<template>
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

}
</script>

<style scoped lang="scss">
.container {
    z-index: 6;
    position: absolute;
    top: 15vh;
    left: 10vw;
    background-color: white;
    min-height: 80vh;
    width: 80vw;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    .summary {
        display: flex;
        flex-direction: column;
    }
}
</style>