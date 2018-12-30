<template>
    <BookGrid
        :books="newReleases" gridTitle="new Releases" 
        customTitleClass="dashboard-title"
        @modalToOpen="handleModalEvent"
        :showSpinner="bookLoading"
        :userId="userInfo.id"
    />
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import BookGrid from '../../../components/BookGrid/BookGrid.vue';
import modalMixins from '../../../mixins/modal-mixins';
import authMixins from '../../../mixins/auth-mixins';

export default {
    name: 'NewReleases',
    mixins: [modalMixins, authMixins],
    computed: {
        ...mapState('books', { bookLoading: 'loading' }),
        ...mapGetters('books', { newReleases: 'getNewReleases' }),
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
