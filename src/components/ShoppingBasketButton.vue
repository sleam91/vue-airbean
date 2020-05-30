<template>
    <div class="shoppingButton">
        <button class="basketButton" @click="showHideBasket()">
            <div class="amountBubble" v-if="getAmountOfItems>0">
                <p class="amountText">{{getAmountOfItems}}</p>
            </div>
        </button>
    </div>
</template>

<script>

export default {
    data() {return{
        hideBasket : this.$store.state.hideInvisibleFilm
    }},

    methods: {
        showHideBasket() {
            this.hideBasket = this.$store.state.hideInvisibleFilm
            this.hideBasket = !this.hideBasket
            this.$store.state.hideInvisibleFilm = this.hideBasket
            if(this.hideBasket) {
                this.$emit('basket-hidden')
            } else {
                this.$emit('basket-visible')
            }
        }
    },
    computed: {
        getAmountOfItems() {
            return this.$store.state.order.items.map(item => item.amount).reduce((a,b) => a+b, 0)
        }
    },
    beforeUpdate() {
        this.hideBasket = this.$store.state.hideInvisibleFilm
    }
}
</script>

<style scoped lang="scss">
.shoppingButton {
    .basketButton {
        z-index: 6;
        height: 5rem;
        width: 5rem;
        background-image: url('../assets/graphics/bag.svg');
        background-size: 1.5rem;
        background-repeat: no-repeat;
        background-position: center;
        padding: none;
        margin: none;
        box-shadow: none;
        position: absolute;
        right: 1.5rem;
        top: 1rem;
        background-color: #2F2926;
        border: none;
        border-radius: 50%;
        outline: none;
        .amountBubble{
            width:1.8rem;
            height: 1.8rem;
            border: none;
            border-radius: 50%;
            position: relative;
            bottom: 2rem;
            left: 2.5rem;
            background-color: #E5674E;
            display: flex;
            justify-content: center;
            align-items: center;
            .amountText{
                margin: 0;
                padding: 0;
                text-align: center;
                font-size: 1rem;
                color: #FFFFFF;
            }
        }
    }
}    
</style>