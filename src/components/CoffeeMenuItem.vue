<template>
    <div class="coffeeMenuItem">
        <div class="left">
            <button class="addButton" v-on:click="addItem(menuItem)"/>
            <div class="textPart">
                <h2>{{menuItem.title}}</h2>
                <p class="description">{{menuItem.desc}}</p>
            </div>
        </div>
        <div class="right">
            <h2 class="price">{{menuItem.price}} kr</h2>
            <p class="dots">....................</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        menuItem: Object,
    },

    methods: {
        addItem(menuItem) {
            this.$store.commit('addItemToBasket', menuItem)
        }
    }
}
</script>

<style scoped lang="scss">
.coffeeMenuItem {
    display: flex;
    justify-content: space-between;
    .left {
        display: flex;
    }
    .addButton {
        height: 2rem;
        width: 2rem;
        background-image: url('../assets/graphics/add.svg');
        background-size: 0.8rem;
        background-repeat: no-repeat;
        background-position: center;
        padding: none;
        margin: none;
        margin-top: 1.6rem;
        margin-right: 1rem;
        box-shadow: none;
        background-color: #2F2926;
        border: none;
        border-radius: 50%;
        outline: none;
    }
    .textPart{
        h2 {
            font-size: 1.5rem;
            margin-bottom: 0;
        }
        p {
            font-size: 0.9rem;
            margin-top: 0;
        }
    }
    .right{
        position: relative;
        h2 {
            font-size: 1.5rem;
            margin-bottom: 0;
        }
        p {
            letter-spacing: 1.5px;
            font-size: 1rem;
            color: rgb(158, 158, 158);
            position: absolute;
            bottom: 1rem;
            right: 3.7rem;
        }
    }
}
</style>