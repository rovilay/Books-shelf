<template>
    <BookGrid
        :books="bookData" gridTitle="favourites" 
        customTitleClass="dashboard-title"
    />
</template>

<script>
import BookGrid from '../../Shared/BookGrid/BookGrid.vue';
import bookData from '../../../data/mockData';

export default {
    name: 'Favourite',
    data() {
        return { bookData }
    },
    components: { BookGrid }
}
</script>

<style lang="scss" scoped>
</style>
