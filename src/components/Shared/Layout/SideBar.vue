<template>
    <div class="side-bar">
        <div class="logo">
            <router-link :to="{name: 'Home'}">
                Book-Shelf
            </router-link>
        </div>
        <div class="menu">
            <ul>
                <li>
                    <i class="fas fa-portrait"></i>
                    <span>Profile</span>
                </li>
                <li>
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </li>
                <li>
                    <i class="fas fa-book"></i>
                    <span>Your Shelf</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
}
</script>

