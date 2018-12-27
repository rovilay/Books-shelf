<template>
    <Layout show-top-header>
        <BookGrid :books="bookData" slot="mainContent" fullWidth />
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
  components: { Layout, BookGrid }
}
</script>

<style lang="scss" src='./home.scss'>

</style>

