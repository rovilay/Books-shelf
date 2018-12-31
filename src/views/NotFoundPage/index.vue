<template>
    <Layout show-top-header :show-auth-btns="showAuthBtns">
        <div class="not-found" slot="mainContent">
            <h1>404</h1>
            <p class="lost-msg">
                You seem lost :(, 
                    <router-link :to="{ name: 'Home' }">
                        Click here
                    </router-link>
                 to find your way :)
            </p>
        </div>
    </Layout>
</template>

<script>
import Layout from '../../components/Layout/index.vue';
import BookGrid from '../../components/BookGrid/BookGrid.vue';
import bookData from '../../data/mockData';
import { validateToken } from '../../Utils/token'

export default {
  name: 'NotFound',
  data() {
      return { showTopHeader: true, bookData, showAuthBtns: false }
  },
  components: { Layout },
}
</script>

<style lang="scss" src='./notFound.scss' scoped>
</style>
