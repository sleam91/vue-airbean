<template>
    <div class="profile">
        <login v-if="!$store.state.loggedIn" />
        <order-history v-else/>
    </div>
</template>

<script>
import Login from "@/components/Login";
import OrderHistory from "@/components/OrderHistory";
export default {
    name: "Profile",
    components: {
        Login,
        OrderHistory
    },
    data() {
        return {
            
        };
    },

};
</script>

<style scoped lang="scss">

.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #2f2926;
}

</style>