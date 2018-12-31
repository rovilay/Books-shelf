<template>
    <div class="container layout structure">
        <header v-if="showTopHeader" class="section header">
            <NavBar :showAuthBtns="showAuthBtns" />
        </header>
        <main class="section main-content" :class="{ 'full-page': !showTopHeader }">
            <div class="container">
                <div class="row content">
                    <div v-if="!showTopHeader" class="col m2 nav-bar-vertical">
                        <SideBar />
                    </div>
                    <div class="col m10 main" :class="{ 'm12': showTopHeader }">
                        <div v-if="!showTopHeader" class="search-bar">
                            <div class="links">
                                <ul>       
                                    <li :class="{'bs-active': compare('Favourite')}">
                                        <router-link :to="{name: 'Favourite'}">
                                            favourites
                                        </router-link>
                                    </li>
                                    <li :class="{'bs-active': compare('BestSellers')}">
                                        <router-link :to="{name: 'BestSellers'}">
                                            Best Sellers
                                        </router-link>
                                    </li>
                                    <li :class="{'bs-active': compare('NewReleases')}">
                                        <router-link :to="{name: 'NewReleases'}">
                                            New Releases
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <slot name="mainContent"></slot>
                        <div v-if="showAddBtn" data-target="modal-1"
                            class="fixed-action-btn bs-float-btn"
                            @click="openAddModal"
                        >
                            <a
                                class="waves-effect waves-light btn-floating btn-large bs-color-bg"
                            >
                                <i class="large material-icons">add</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer class="section page-footer">
            <div class="footer-copyright">
            <div class="container">
                Book-Shelf © 2018
            </div>
            </div>
        </footer>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue';

export default {
  name: 'Layout',
  components: { NavBar, SideBar },
  methods: {
        compare(routeName) {
            return this.$route.name === routeName;
        },
        openAddModal: function() {
            this.$emit('modalToOpen', 'addBookModal')
        }
  },
  props: {
      showTopHeader: { type: Boolean, default: false },
      showAddBtn: { type: Boolean, default: false },
      showAuthBtns: { type: Boolean, default: true }
  }
}
</script>

<style lang="scss" src='./Layout.scss'>
</style>
