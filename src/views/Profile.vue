<template>
    <div class="profile">
        <top/>
        <login v-if="!$store.state.loggedIn" />
        <order-history v-else/>
    </div>
</template>

<script>
import Login from "@/components/Login";
import OrderHistory from "@/components/OrderHistory";
import Top from '@/components/Top'
export default {
    name: "Profile",
    components: {
        Top,
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
    min-height: 100vh;
    background-color: #2f2926;
}

</style>