<template>
    <Layout show-top-header>
        <div class="showcase" slot="mainContent">
            <h1>So many books, so little time...</h1>
            <router-link :to="{ name: 'Login' }">
                <button class="signup waves-effect waves-light btn-large bs-btn">
                    Explore!
                </button>
            </router-link>
        </div>
        <BookGrid
            gridTitle="New Releases" :books="newReleases" 
            slot="mainContent" fullWidth 
        />
        <BookGrid
            gridTitle="Best Sellers" :books="bestSellers" 
            slot="mainContent" fullWidth 
        />
    </Layout>
</template>

<script>
import Layout from '../../components/Layout/index.vue';
import BookGrid from '../../components/BookGrid/BookGrid.vue';
import bookData from '../../data/mockData';
import { validateToken } from '../../Utils/token'

export default {
  name: 'Home',
  data() {
      return { showTopHeader: true, bookData }
  },
  computed: {
      newReleases() {
          return this.bookData.slice(0, 6)
      },
      bestSellers() {
          return this.bookData.slice(6, 9)
      }
  },
  components: { Layout, BookGrid },
  beforeCreate: function() {
      const validToken = validateToken();
      if (validToken) this.$router.push({ name: 'Dashboard' });
  }
}
</script>

<style lang="scss" src='./home.scss' scoped>
</style>

