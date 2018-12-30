<template>
    <div>
        <h3 
            v-if="gridTitle" slot="mainContent" class="bs-title" 
            :class="customTitleClass"
        >
            {{gridTitle}}
        </h3>
        <div
            class="books-grid" :class="{ 'bs-full': fullWidth }"
            slot="mainContent" v-if="showBooks"
        >
            <div v-for="book in books" class="book" :key="book.id" >
                <BookCard
                    :book="book" @modalToOpen="handleModalEvent" :userId="userId"
                />
                <div class="book-title text-ellipsis">
                    {{book.title}}
                </div>
                <p class="book-price">{{book.price | currency('$')}}</p>
            </div>
        </div>
        <div v-if="!showSpinner && !books.length" class="bs-no-books">
            {{noBooksMessage}}
        </div>
        <Spinner v-if="showSpinner" />      
    </div>
</template>
<script>
import BookCard from '../BookCard/BookCard.vue';
import Spinner from '../Spinner/PageSpinner.vue';

export default {
    name: 'BookGrid',
    data() {
      return { showTopHeader: true }
    },
    props: {
      books: {
          type: Array,
          required: true
      },
      userId: {
          type: [Number, String],
          required: true
      },
      gridTitle: { type: String },
      fullWidth: { type: Boolean, default: false },
      customTitleClass: { type: String, default: '' },
      noBooksMessage: { type: String, required: false, default: 'No books to display!' },
      showSpinner: { type: Boolean, required:false, default: false }
    },
    components: { BookCard, Spinner },
    methods: {
        handleModalEvent: function(modalType, book) {
            this.$emit('modalToOpen', modalType, book);
        }
    },
    computed: {
        showBooks: function() {
            return !this.showSpinner && this.books.length
        }
    }
}
</script>

<style lang="scss" src='./bookGrid.scss' scoped>
</style>
