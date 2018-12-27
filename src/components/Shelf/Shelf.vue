<template>
    <Layout>
        <div class="content-main" slot="mainContent">
            <BookGrid
                :books="bookData" gridTitle="My Shelf" 
                customTitleClass="dashboard-title"
            />
        </div>
    </Layout>
</template>

<script>
import Layout from '../Shared/Layout/index.vue';
import BookGrid from '../Shared/BookGrid/BookGrid.vue';
import bookData from '../../data/mockData';

export default {
    name: 'Shelf',
    data() {
        return { bookData }
    },
    components: { Layout, BookGrid }
}
</script>

<style lang="scss" scoped>
</style>
