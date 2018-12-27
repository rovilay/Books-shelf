<template>
    <Layout show-top-header>
        <div class="showcase" slot="mainContent">
            <h1>So many books, so little time...</h1>
            <button class="signup waves-effect waves-light btn-large bs-btn">
                Explore!
            </button>
        </div>
        <BookGrid
            gridTitle="New Arrivals" :books="newArrivals" 
            slot="mainContent" fullWidth 
        />
        <BookGrid
            gridTitle="Best Sellers" :books="bestSellers" 
            slot="mainContent" fullWidth 
        />
    </Layout>
</template>

<script>
import Layout from '../Shared/Layout/index.vue';
import BookGrid from '../Shared/BookGrid/BookGrid.vue';
import bookData from '../../data/mockData';

export default {
  name: 'Home',
  data() {
      return { showTopHeader: true, bookData }
  },
  computed: {
      newArrivals() {
          return this.bookData.slice(0, 6)
      },
      bestSellers() {
          return this.bookData.slice(6, 9)
      }
  },
  components: { Layout, BookGrid }
}
</script>

<style lang="scss" src='./home.scss' scoped>
</style>

