<template>
    <BookGrid
        :books="bookData" gridTitle="new Releases" 
        customTitleClass="dashboard-title"
    />
</template>

<script>
import BookGrid from '../../Shared/BookGrid/BookGrid.vue';
import bookData from '../../../data/mockData';

export default {
    name: 'NewReleases',
    data() {
        return { bookData }
    },
    components: { BookGrid }
}
</script>

<style lang="scss" scoped>
</style>
