<template>
    <div class="books-grid" :class="{ 'full': fullWidth }" slot="mainContent">
        <div v-for="book in books" class="book" :key="book.id" >
            <BookCard :book="book" />
            <div class="book-title text-ellipsis">
                {{book.name}}
            </div>
        </div>
    </div>
</template>

<script>
import BookCard from '../BookCard/BookCard.vue';

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
      fullWidth: { type: Boolean, default: false }
  },
  components: { BookCard }
}
</script>

<style lang="scss" src='./bookGrid.scss' scoped>
</style>
