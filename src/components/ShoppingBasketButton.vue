<template>
    <div class="shoppingButton">
        <button class="basketButton" @click="showHideBasket()">
            <div class="amountBubble" v-if="getAmountOfItems>0">
                <p class="amountText">{{getAmountOfItems}}</p>
            </div>
        </button>
        <svg v-if="!hideTriangle"
            class="littleTriangle"
            width="30"
            height="20"
            viewBox="0 0 67 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M31.8852 1.20995C32.6841 0.116578 34.3159 0.116574 35.1148 1.20995L66.2504 43.82C67.216 45.1415 66.2722 47 64.6356 47H2.36444C0.727807 47 -0.215984 45.1415 0.749604 43.82L31.8852 1.20995Z"
                fill="white"
            />
        </svg>

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
            this.$store.commit('updateInvisibleFilm',this.hideBasket)
            if(this.hideBasket) {
                this.$emit('basket-hidden')
            } else {
                this.$emit('basket-visible')
            }
        }
    },
    computed: {
        getAmountOfItems() {
            return this.$store.getters.getAmountOfItems
        },
        hideTriangle() {
            return this.$store.state.hideInvisibleFilm
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
    .littleTriangle {
        z-index: 7;
        position: absolute;
        top: 5rem;
        right: 3rem;
    }
}    
</style>