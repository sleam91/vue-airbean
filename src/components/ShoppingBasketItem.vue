<template>
    <div class="shoppingItem">
        <div class="info">
            <h2>{{orderItem.item.title}}</h2>
            <p>{{orderItem.item.price}} kr</p>
        </div>
        <div class="controls">
            <img src="@/assets/graphics/arrow-up.svg" @click="addItem(orderItem.item)" alt="" class="arrUpp">
            <h2>{{orderItem.amount}}</h2>
            <img src="@/assets/graphics/arrow-down.svg" @click="removeItem(orderItem.item)" alt="" class="arrDown">
            <p class="dots">...........................</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        orderItem: Object,
    },

    methods: {
        addItem(item) {
            this.$store.commit('addItemToBasket', item)
        },
        removeItem(item) {
            this.$store.commit('removeItemfromBasket', item)
        }
    },
    computed: {
        ammountOf() {
            return this.$store.state.order.items.filter(item => item.item.id == this.orderItem.item.id).length
        }
    }
}
</script>

<style scoped lang="scss">
    .shoppingItem {
        display: flex;
        justify-content: space-between;
    
        .info {
            h2 {
                font-size: 1.3rem;
                margin: 0;
            }
            p {
                margin-top: 0.1rem;
                margin-bottom: 1rem;
                font-size: 0.8rem;
            }
        }
        .controls {
            position: relative;
            .dots {
                font-size: 0.9rem;
                letter-spacing: 3px;
                color: rgb(153, 152, 152);
                padding: 0;
                margin: 0;
                margin: 0;
                padding: 0;
                position: absolute;
                right: 1rem;
                bottom: 1.5rem;
            }
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            max-height: 3rem;
            h2 {
                font-size: 1.1rem;
                margin: 0;
            }
        }
    }

</style>