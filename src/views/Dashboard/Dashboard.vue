<template>
    <div class="dashboard">
        <BookGrid
            :books="newReleases" gridTitle="new releases" 
            customTitleClass="dashboard-title"
            @modalToOpen="handleModalEvent"
            :showSpinner="bookLoading"
            noBooksMessage="Nothing new yet"
            :userId="userInfo.id"
        />
        <BookGrid
            :books="favourites" gridTitle="favourites"
            customTitleClass="dashboard-title"
            @modalToOpen="handleModalEvent"
            :showSpinner="bookLoading"
            noBooksMessage="No favourites yet"
            :userId="userInfo.id"
        />
        <BookGrid
            :books="bestSellers" gridTitle="best sellers"
            customTitleClass="dashboard-title"
            @modalToOpen="handleModalEvent"
            :showSpinner="bookLoading"
            noBooksMessage="No Best sellers"
            :userId="userInfo.id"
        />
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BookGrid from '../../components/BookGrid/BookGrid.vue';
import modalMixins from '../../mixins/modal-mixins';
import authMixins from '../../mixins/auth-mixins';

export default {
    name: 'Dashboard',
    mixins: [modalMixins, authMixins],
    computed: {
        ...mapState('books', { bookLoading: 'loading' }),
        ...mapGetters('books', {
            bestSellers: 'getBestSellers',
            favourites: 'getFavourites',
            newReleases: 'getNewReleases'
        }),
    },
    methods: {
        ...mapActions('books', { fetchBooks: 'fetchBooksAction' })
    },
    components: { BookGrid },
    created: function() {
      this.fetchBooks();
    }
}
</script>

<style lang="scss">
.dashboard-title {
    width: 100%;
    padding-left: 22px;
}
</style>
