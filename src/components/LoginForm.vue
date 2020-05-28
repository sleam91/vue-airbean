<template>
    <form @submit.prevent="submit">
        <p class="input-name">
            <label for="name">Namn</label>
            <input id="name" v-model="name" type="text" name="name" :class="noName" />
        </p>
        <p class="input-email">
            <label for="email">Epost</label>
            <input id="email" v-model="email" type="text" name="email" :class="noEmail" />
        </p>
        <p class="GDPR-check">
            <input type="checkbox" id="GDPR" value="GDPR" v-model="checked" />
            <label for="GDPR">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#2F2926" />
                    <circle cx="8" cy="8" r="6" :fill="color" />
                </svg>
                <span :class="noGPDR">GDPR Ok!</span>
            </label>
        </p>
        <p class="submit-button">
            <input type="submit" value="Brew me a cup!" />
        </p>
    </form>
</template>

<script>
export default {
    Name: "LoginForm",
    data() {
        return {
            name: "Sixten Kaffelövér",
            email: "sixtenkaffelover@zocom.se",
            checked: false,
            noNameInput: false,
            noEmailInput: false,
            noGPDRChecked: false
        };
    },
    methods: {
        async submit() {
            this.noNameInput = false;
            this.noEmailInput = false;
            this.noGPDRChecked = false;
            if (this.name && this.email && this.checked) {
                this.$store.state.user.name = this.name;
                this.$store.state.user.email = this.email;
                await this.$store.dispatch("loginUser", this.$store.state.user);
                this.$store.state.loggedIn = true;
            } else {
                if (!this.name) {
                    this.noNameInput = true;
                }
                if (!this.email) {
                    this.noEmailInput = true;
                }
                if (!this.checked) {
                    this.noGPDRChecked = true;
                }
            }
        }
    },
    computed: {
        color() {
            return this.checked ? "#0E927D" : "none";
        },
        noName() {
            return { red: this.noNameInput };
        },
        noEmail() {
            return { red: this.noEmailInput };
        },
        noGPDR() {
            return { red: this.noGPDRChecked };
        }
    }
};
</script>

<style lang="scss" scoped>
.input-name,
.input-email {
    text-align: start;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    min-width: 100%;

    input {
        background: #f3e4e1;
        font-family: "Work Sans";
        border-color: black;
        font-size: 1rem;
        border-width: 1px;
        border-radius: 6px;
        height: 3rem;
        padding: 0 1rem;
        &.red {
            background-color: rgba(255, 0, 0, 0.199);
        }
        color: #2f2926;
    }
}
.GDPR-check {
    border-color: black;
    padding: 0;
    font-size: 0.75rem;

    label {
        display: flex;
        align-items: center;
        .red {
            color: red;
        }
        span {
            margin-left: 0.5rem;
        }
    }
    input[type="checkbox"] {
        display: none;
    }
}

input[type="submit" i] {
    padding: 0 8vw;
    height: 3.4rem;
    font-size: 1.5rem;
    font-family: "PT Serif";
    border-radius: 1.7rem;
    color: #ffffff;
    border: none;
    background: #2f2926;
    letter-spacing: 1.2px;
    vertical-align: middle;
}
</style>