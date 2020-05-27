<template>
    <div class="login">
        <img :src="require('@/assets/graphics/logo.svg')" alt="icon" />
        <h1>{{title}}</h1>
        <h3>{{subtitle}}</h3>
        <form action>
            <p class="input-name">
                <label for="name">Namn</label>
                <input id="name" v-model="name" type="text" name="name" />
            </p>
            <p class="input-email">
                <label for="email">Epost</label>
                <input id="email" v-model="email" type="text" name="email" />
            </p>
            <p class="GDPR-checkbox">
            <input type = "checkbox"
                 id = "GDPR"
                 value = "GDPR" />
             <label for = "GDPR">GDPR Ok!</label>
             </p>
            <p class="submit-button">
                <input type="submit" value="Brew me a cup!" />
            </p>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            title: "Välkommen till AirBean-familjen!",
            subtitle:
                "Genom att skapa ett konto nedan kan du spara och se din orderhistorik.",
            name: "",
            email: ""
        };
    }
};
</script>

<style lang="scss" scoped>
.login {
    background: #f3e4e1;
    padding: 2rem 1rem;
    margin: 5rem 1rem 0;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    text-align: center;
    font-family: "Work Sans";
}

.input-name,
.input-email {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: start;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    
    input {
        background: #f3e4e1;
        font-family: "Work Sans";
        border-color: black;
        font-size: large;
        border-width: 1px;
        border-radius: 6px;
        height: 3rem;
        padding: 0 1rem;
        min-width: 70vw;;
    }
}

h1 {
    font-family: "PT Serif";
}
h3 {
    font-weight: normal;
}
input[type="submit" i] {
    padding: 0 2.5rem;
    height: 3.6rem;
    font-size: 1.5rem;
    font-family: "PT Serif";
    border-radius: 1.8rem;
    color: #ffffff;
    border: none;
    background: #2f2926;
    letter-spacing: 1.2px;
    vertical-align: middle;
}
.GDPR-checkbox{
    display: flex;
    padding: 0 1rem;
    font-size: 0.75rem;
}
</style>