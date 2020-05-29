<template>
    <div class="wrapper">
        <svg class="littleTriangle" width="67" height="47" viewBox="0 0 67 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.8852 1.20995C32.6841 0.116578 34.3159 0.116574 35.1148 1.20995L66.2504 43.82C67.216 45.1415 66.2722 47 64.6356 47H2.36444C0.727807 47 -0.215984 45.1415 0.749604 43.82L31.8852 1.20995Z" fill="white"/>
        </svg>

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
import getTodaysFormattedDate from '@/assets/date'

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
        async makeOrder() {
            this.$store.state.order.date=getTodaysFormattedDate()//TODO convert to commit
            this.$store.state.order.total = this.getSum//TODO convert to commit
            await this.$store.dispatch('addOrderToUser')
            this.$router.push('/status')
        }
    }

}
</script>

<style scoped lang="scss">
.wrapper {
    .littleTriangle{
        z-index: 20;
        position: absolute;
        top: 5rem;
        right: 1.9rem;
    }
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 112%;
    .container {

        z-index: 6;
        position: absolute;
        top: 6rem;
        left: 4vw;
        background-color: white;
        min-height: 80vh;
        width: 90vw;
        margin: 0;
        border: none;
        border-radius: 0.3rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3{
            font-family: "PT Serif";
            font-size: 2rem;
            margin-top: 2rem;
            margin-bottom: 1.5rem;
        }
        ul {
            width: 90%;
            margin: 0;
            padding: 0;
        }

        .summary {
            width: 90%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .text h2, h2 {
                font-size: 1.5rem;
                margin-top: 1rem;
                margin-bottom: 0.3rem;
            }
            .text p {
                margin: 0;
                margin-bottom: 1rem;
            }
        }
        .makeOrder{
            margin: 2.5rem 0;
            width: 16rem;
            padding: 0 1rem;
            height: 3.6rem;
            font-size: 1.4rem;
            font-family: "PT Serif";
            border-radius: 1.8rem;
            color: #ffffff;
            border: none;
            background: #2f2926;
            letter-spacing: 1.2px;
            vertical-align: middle;
            font-family: "PT Serif";
        }
    }
}    
</style>