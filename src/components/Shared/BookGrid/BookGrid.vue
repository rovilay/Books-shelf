<template>
    <div>
        <h3 
            v-if="gridTitle" slot="mainContent" class="bs-title" 
            :class="customTitleClass"
        >
            {{gridTitle}}
        </h3>
        <div class="books-grid" :class="{ 'bs-full': fullWidth }" slot="mainContent">
            <div v-for="book in books" class="book" :key="book.id" >
                <BookCard :book="book" />
                <div class="book-title text-ellipsis">
                    {{book.name}}
                </div>
                <p class="book-price">{{book.price | currency('$')}}</p>
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
      gridTitle: { type: String },
      fullWidth: { type: Boolean, default: false },
      customTitleClass: { type: String, default: '' }
  },
  components: { BookCard }
}
</script>

<style lang="scss" src='./bookGrid.scss' scoped>
</style>
