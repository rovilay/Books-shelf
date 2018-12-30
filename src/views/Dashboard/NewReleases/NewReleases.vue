<template>
    <BookGrid
        :books="bookData" gridTitle="new Releases" 
        customTitleClass="dashboard-title"
        @modalToOpen="handleModalEvent"
    />
</template>

<script>
import BookGrid from '../../../components/BookGrid/BookGrid.vue';
import bookData from '../../../data/mockData';
import modalMixins from '../../../mixins/modal-mixins';
import authMixins from '../../../mixins/auth-mixins';

export default {
    name: 'NewReleases',
    mixins: [modalMixins, authMixins],
    data() {
        return { bookData }
    },
    components: { BookGrid }
}
</script>

<style lang="scss" scoped>
</style>
