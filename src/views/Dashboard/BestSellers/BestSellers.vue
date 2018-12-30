<template>
    <BookGrid
        :books="bookData" gridTitle="best sellers" 
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
    name: 'BestSellers',
    mixins: [modalMixins, authMixins],
    data() {
        return { bookData }
    },
    components: { BookGrid }
}
</script>

<style lang="scss" scoped>
</style>
