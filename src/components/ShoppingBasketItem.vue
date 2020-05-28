<template>
    <div class="shoppingItem">
        <div class="info">
            <h2>{{shoppingItem.title}}</h2>
            <p>{{shoppingItem.price}} kr</p>
            <p class="dots">....................</p>
        </div>
        <div class="controls">
            <img src="@/assets/graphics/arrow-up.svg" @click="addItem(shoppingItem)" alt="" class="arrUpp">
            <h2>{{ammountOf}}</h2>
            <img src="@/assets/graphics/arrow-down.svg" @click="removeItem(shoppingItem)" alt="" class="arrDown">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        shoppingItem: Object,
        ammountOf: Number
    },

    methods: {
        addItem(item) {
            this.$store.commit('addItemToBasket', item)
        },
        removeItem(item) {
            this.$store.commit('removeItemfromBasket', item)
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