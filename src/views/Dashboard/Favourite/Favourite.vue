<template>
    <BookGrid
        :books="bookData" gridTitle="favourites" 
        customTitleClass="dashboard-title"
        @modalToOpen="handleModalEvent"
        noBooksMessage="No favourite book yet!"
        :showSpinner="bookLoading"
    />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BookGrid from '../../../components/BookGrid/BookGrid.vue';
import modalMixins from '../../../mixins/modal-mixins';
import authMixins from '../../../mixins/auth-mixins';

export default {
    name: 'Favourite',
    mixins: [modalMixins, authMixins],
    components: { BookGrid },
    computed: {
        ...mapState('books', { bookData: 'books', bookLoading: 'loading' }),
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
