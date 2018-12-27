<template>
    <Layout :show-top-header="showTopHeader">
        <div slot="mainContent" class="content-main">
            <BookGrid :books="bookData" slot="mainContent" />
        </div>
    </Layout>
</template>

<script>
import Layout from '../Shared/Layout/index.vue';
import BookGrid from '../Shared/BookGrid/BookGrid.vue';
import bookData from '../../data/mockData';

export default {
  name: 'Dashboard',
  data() {
      return { showTopHeader: false, bookData }
  },
  components: { Layout, BookGrid }
}
</script>

<style lang="scss">
</style>
