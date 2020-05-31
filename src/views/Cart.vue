<template>
    <div class="wrapper">
        <div class="container">
            <h3>Din beställning</h3>
            <ul class="itemsInBasket">
                <shopping-basket-item
                    v-for="orderItem in getOrderItems"
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
import ShoppingBasketItem from "@/components/ShoppingBasketItem";
import getTodaysFormattedDate from "@/assets/date";

export default {
    name: "cart",
    components: {
        ShoppingBasketItem
    },

    computed: {
        getOrderItems() {
            return this.$store.state.order.items;
        },
        getSum() {
            let sum = 0;
            for (let itemInOrderList of this.$store.state.order.items) {
                sum += itemInOrderList.item.price * itemInOrderList.amount;
            }
            return sum;
        }
    },
    methods: {
        async makeOrder() {
            if (this.getSum > 0) {
                this.$store.commit('setOrderDate',getTodaysFormattedDate())
                this.$store.commit('setOrderTotal',this.getSum)
                this.$store.commit('setOrderEta',this.$store.getters.getAmountOfItems+4)
                await this.$store.dispatch("addOrderToUser");
                this.$store.commit('hideInvisibleFilm')
                this.$router.push("/status");
            }
        }
    },
    updated() {
        sessionStorage.setItem("storeState", JSON.stringify(this.$store.state));
    },
    beforeCreate() {
        this.$store.commit('showInvisibleFilm')
    }
};
</script>

<style scoped lang="scss">



.wrapper {
    .littleTriangle {
        z-index: 7;
        position: absolute;
        top: 5rem;
        right: 1.9rem;
    }
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100%;
    .container {
        z-index: 6;
        position: absolute;
        top: 6rem;
        right: 5vw;
        background-color: white;
        min-height: 80vh;
        width: 90vw;
        margin: 0;
        border: none;
        border-radius: 0.3rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
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
            .text h2,
            h2 {
                font-size: 1.5rem;
                margin-top: 1rem;
                margin-bottom: 0.3rem;
            }
            .text p {
                margin: 0;
                margin-bottom: 1rem;
            }
        }
        .makeOrder {
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
            outline: none;
        }
    }
}
@media screen and (min-width: 500px) {
    .wrapper {
        .container {
            right: 1.7rem;
        }
    }
}
</style>