<template>
    <div class="dashboard">
        <BookGrid
            :books="newReleases" gridTitle="new releases" 
            customTitleClass="dashboard-title"
            @modalToOpen="handleModalEvent"
        />
        <BookGrid
            :books="favourites" gridTitle="favourites"
            customTitleClass="dashboard-title"
            @modalToOpen="handleModalEvent"
        />
        <BookGrid
            :books="bestSellers" gridTitle="best sellers"
            customTitleClass="dashboard-title"
            @modalToOpen="handleModalEvent"
        />
    </div>
</template>

<script>
import BookGrid from '../Shared/BookGrid/BookGrid.vue';
import bookData from '../../data/mockData';
import modalMixins from '../../mixins/modal-mixins';

export default {
    name: 'Dashboard',
    data() {
        return { bookData }
    },
    mixins: [modalMixins],
    computed: {
        newReleases() {
          return this.bookData.slice(0, 7)
        },
        bestSellers() {
          return this.bookData.slice(6, 11)
        },
        favourites() {
          return this.bookData.slice(7)
        }
  },
    components: { BookGrid },
}
</script>

<style lang="scss">
.dashboard-title {
    width: 100%;
    padding-left: 22px;
}
</style>
