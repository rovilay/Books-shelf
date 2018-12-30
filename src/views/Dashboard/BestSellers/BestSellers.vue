<template>
    <BookGrid
        :books="bestSellers" gridTitle="best sellers" 
        customTitleClass="dashboard-title"
        @modalToOpen="handleModalEvent"
        :showSpinner="bookLoading"
    />
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BookGrid from '../../../components/BookGrid/BookGrid.vue';
import modalMixins from '../../../mixins/modal-mixins';
import authMixins from '../../../mixins/auth-mixins';

export default {
    name: 'BestSellers',
    mixins: [modalMixins, authMixins],
    computed: {
        ...mapState('books', { bookLoading: 'loading' }),
        ...mapGetters('books', { bestSellers: 'getBestSellers', }),
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

<style lang="scss" scoped>
</style>
