<template>
    <div class="container">
        <h3>Din beställning</h3>
        <ul class="itemsInBasket">
            <shopping-basket-item   v-for="shoppingItem in getOrderItems"
                                    :key="shoppingItem.id"
                                    :ammountOf="getAmmountOfSameItems(shoppingItem)"
            />
        </ul>
        <div class="summery">
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
        getAmmountOfSameItems(item) {
            return this.getOrderItems.filter(itemInList => itemInList.id == item.id).length
        },
        getSum() {
            return this.getOrderItems.map(item => item.price).reduce((a,b) => a + b, 0)
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
    height: 80vh;
    width: 80vw;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    .summery {
        display: flex;
        flex-direction: column;
    }
}
</style>