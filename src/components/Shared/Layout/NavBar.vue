<template>
    <div class="header-container">
        <div class="logo">
            <router-link to="/">
                Book-Shelf
            </router-link>
        </div>
        <div class="auth">
            <button class="login waves-effect waves-light btn bs-btn-light">
                Log in
            </button>
            <button class="signup waves-effect waves-light btn bs-btn">
                Sign up
            </button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'NavBar'
}
</script>

