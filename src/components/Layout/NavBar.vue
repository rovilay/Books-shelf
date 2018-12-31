<template>
    <div class="header-container">
        <div class="logo">
            <router-link to="/">
                Book-Shelf
            </router-link>
        </div>
        <div v-show="showAuthBtns" class="auth">
            <button @click="pushToLogin" class="login waves-effect waves-light btn bs-btn-light">
                Log in
            </button>
            <button @click="pushToSignup" class="signup waves-effect waves-light btn bs-btn">
                Sign up
            </button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'NavBar',
    props: {
        showAuthBtns: { type: Boolean, required: true }
    },
    methods: {
        pushToLogin() {
            this.$router.push({ name: 'Login' });
        },
        pushToSignup() {
            this.$router.push({ name: 'Signup' });
        },
    },
}
</script>
