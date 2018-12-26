<template>
    <div class="container structure">
        <header v-if="showTopHeader" class="section">header</header>
        <main class="section main-content" :class="{ 'full-page': !showTopHeader }">
            <div class="container">
                <div class="row content">
                    <div v-if="!showTopHeader" class="col m2 nav-bar-vertical">1</div>
                    <div class="col m10 main" :class="{ 'm12': showTopHeader }">
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
export default {
  name: 'Structure',
  props: {
      showTopHeader: { type: Boolean, required: true, default: false }
  }
}
</script>

<style lang="scss" src='./Layout.scss'>
</style>
