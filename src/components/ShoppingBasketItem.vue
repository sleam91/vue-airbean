<template>
    <div class="shoppingItem">
        <div class="info">
            <h2>{{orderItem.item.title}}</h2>
            <p>{{orderItem.item.price}} kr</p>
            <p class="dots">....................</p>
        </div>
        <div class="controls">
            <img src="@/assets/graphics/arrow-up.svg" @click="addItem(orderItem.item)" alt="" class="arrUpp">
            <h2>{{orderItem.amount}}</h2>
            <img src="@/assets/graphics/arrow-down.svg" @click="removeItem(orderItem.item)" alt="" class="arrDown">
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
            position: relative;
            .dots {
                position: absolute;
            }
        }
        .controls {
            display: flex;
            flex-direction: column;
        }
    }

</style>