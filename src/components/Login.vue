<template>
    <div class="login">
        <img :src="require('@/assets/graphics/logo.svg')" alt="icon" />
        <h1>{{title}}</h1>
        <p>{{subtitle}}</p>
        <login-form />
    </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
    name: "Login",
    components: {
        LoginForm
    },
    data() {
        return {
            title: "Välkommen till AirBean-familjen!",
            subtitle:
                "Genom att skapa ett konto nedan kan du spara och se din orderhistorik."
        };
    }
};
</script>

<style lang="scss" scoped>
.login {
    background: #f3e4e1;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.6);
    padding: 2rem 2rem;
    margin: -1rem 1rem 1.5rem;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    font-family: "Work Sans";
    color: #2f2926;

    h1 {
        font-family: "PT Serif";
        margin-bottom: 0;
    }
    p {
        line-height: 1.6;
        margin-top: 0.5rem;
    }
}
</style>