<template>
    <BookGrid
        :books="bookData" gridTitle="favourites" 
        customTitleClass="dashboard-title"
        @modalToOpen="handleModalEvent"
    />
</template>

<script>
import BookGrid from '../../Shared/BookGrid/BookGrid.vue';
import bookData from '../../../data/mockData';
import modalMixins from '../../../mixins/modal-mixins';

export default {
    name: 'Favourite',
    mixins: [modalMixins],
    data() {
        return { bookData }
    },
    components: { BookGrid }
}
</script>

<style lang="scss" scoped>
</style>
