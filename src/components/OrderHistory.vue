<template>
    <div class="user-info">
        <img :src="require('@/assets/graphics/profile.svg')" alt="profile" />
        <div class="username">
            <h1>{{name}}</h1>
            <p>{{email}}</p>
        </div>
        <section class="order-history">
            <h1>Orderhistorik</h1>
            <p v-if="orderList.length==0">Inga beställningar!</p>
            <article class="order" v-for="order in orderList" :key="order.orderNo">
                <div class="number-date">
                    <h3>{{order.orderNo}}</h3>
                    <p>{{order.date}}</p>
                </div>
                <div class="order-total">
                    <p>total ordersumma</p>
                    <p>{{order.total}} kr</p>
                </div>
            </article>
            <div class="total-spent">
                <p>Totalt spenderat</p>
                <p>{{totalSpent}} kr</p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "OrderHistory",
    computed: {
        name() {
            return this.$store.state.user.name;
        },
        email() {
            return this.$store.state.user.email;
        },
        orderList() {
            return this.$store.state.user.listOfOrders;
        },
        totalSpent() {
            let total = 0;
            for (let order of this.orderList) {
                total += order.total;
            }
            return total;
        }
    }
};
</script>

<style lang="scss" scoped>
.user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: "Work Sans";
    .username {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: center;
        line-height: 1.6;
        h1 {
            font-family: "PT Serif";
            margin-bottom: 0;
            font-size: 1.5rem;
        }
        p {
            font-size: 0.875rem;
            margin-top: 0;
        }
    }
    .order-history {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        width: 70vw;
        max-width: 480px;
        display: flex;
        flex-direction: column;
        line-height: 1.6;
        h1 {
            font-size: 1.375rem;
            margin-bottom: 0;
        }

        .order {
            display: flex;
            flex-direction: column;
            .number-date,
            .order-total {
                display: flex;
                justify-content: space-between;

                h3 {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.582);
                    margin-bottom: 0;
                }
                p {
                    font-size: 0.875rem;
                    color: rgba(255, 255, 255, 0.308);
                }
            }
            .number-date {
                p {
                    margin-bottom: 0;
                    font-size: 0.875rem;
                }
            }
            .order-total {
                border-bottom: 1px solid rgba(255, 255, 255, 0.308);
                p {
                    font-size: 0.75rem;
                    margin-top: 0;
                }
            }
        }
        .total-spent {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            border-top: 1px solid white;
        }
    }
}
</style>