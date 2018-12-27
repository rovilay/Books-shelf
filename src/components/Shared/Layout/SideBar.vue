<template>
    <div class="side-bar">
        <div class="logo">
            <router-link :to="{name: 'Home'}">
                Book-Shelf
            </router-link>
        </div>
        <div class="menu">
            <ul>
                <li :class="{'bs-active': compare('Profile')}">
                    <router-link :to="{name: 'Profile'}">
                        <i class="material-icons">person_outline</i>
                        <span>Profile</span>
                    </router-link>
                </li>
                <li :class="{'bs-active': compare('Dashboard')}">
                    <router-link :to="{name: 'Dashboard'}">
                        <i class="material-icons">home</i>
                        <span>Home</span>
                    </router-link>
                </li>
                <li :class="{'bs-active': compare('Shelf')}">
                    <router-link :to="{name: 'Shelf'}">
                        <i class="material-icons">sort</i>
                        <span>My Shelf</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    methods: {
        compare(routeName) {
            return this.$route.name === routeName;
        }
    },
}
</script>

<style lang="scss" scoped>
    .side-bar {
        .menu {
            li {
                a.router-link-exact-active {
                    color: #70D179;
                }
            }
        }
    }
</style>
