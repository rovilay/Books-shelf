<template>
    <div class="header-container">
        <div class="logo">
            <router-link to="/">
                Book-Shelf
            </router-link>
        </div>
        <div class="auth">
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
    methods: {
        pushToLogin() {
            this.$router.push({
                name: 'Login',
                params: {
                    id: 'ogo',
                },
            });
        },
        pushToSignup() {
            this.$router.push({
                name: 'Signup',
                params: {
                    id: 'ogo',
                },
            });
        },
    }
}
</script>

