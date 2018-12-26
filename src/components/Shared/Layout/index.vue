<template>
    <div class="container structure">
        <header v-if="showTopHeader" class="section header">
            <NavBar />
        </header>
        <main class="section main-content" :class="{ 'full-page': !showTopHeader }">
            <div class="container">
                <div class="row content">
                    <div v-if="!showTopHeader" class="col m2 nav-bar-vertical">
                        <SideBar />
                    </div>
                    <div class="col m10 main" :class="{ 'm12': showTopHeader }">
                        <div class="search-bar">
                            <!-- <label for="inp" class="inp">
                                <input type="text" id="inp" class="browser-default">
                                <span class="label"><i class="fas fa-search" /></span>
                                <span class="border"></span>
                            </label> -->
                            <div class="links">
                                <ul>
                                    <li>favourite</li>
                                    <li>Best Selling</li>
                                    <li>New Release</li>
                                </ul>
                            </div>
                        </div>
                        <slot name="mainContent"></slot>
                    </div>
                </div>
            </div>
        </main>
        <footer class="section page-footer">
            <div class="footer-copyright">
            <div class="container">
                Books-Shelf © 2018
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
  props: {
      showTopHeader: { type: Boolean, required: true, default: false }
  }
}
</script>

<style lang="scss" src='./Layout.scss'>
</style>
