<template>
    <BookGrid
        :books="favourites" gridTitle="favourites" 
        customTitleClass="dashboard-title"
        @modalToOpen="handleModalEvent"
        noBooksMessage="No favourite book yet!"
        :showSpinner="bookLoading"
    />
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BookGrid from '../../../components/BookGrid/BookGrid.vue';
import modalMixins from '../../../mixins/modal-mixins';
import authMixins from '../../../mixins/auth-mixins';

export default {
    name: 'Favourite',
    mixins: [modalMixins, authMixins],
    components: { BookGrid },
    computed: {
        ...mapState('books', { bookLoading: 'loading' }),
        ...mapGetters('books', { favourites: 'getFavourites' }),
    },
    methods: {
        ...mapActions('books', { fetchFavBooks: 'fetchFavBooksAction' })
    },
    created: function() {
      this.fetchFavBooks();
    }
}
</script>

<style lang="scss" scoped>
</style>
