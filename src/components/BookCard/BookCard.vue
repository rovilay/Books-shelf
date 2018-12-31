<template>
    <div class="book-card" :style="{backgroundImage: 'url(' + book.image + ')'}">
        <div v-if="showActionBar" class="book-action">
            <a 
                class="btn-floating btn-small waves-effect waves-light red"
                @click="handleFavBook()"
            >
                <i class="material-icons">{{fav}}</i>
            </a>
            <a
                class="btn-floating btn-small waves-effect waves-light red"
                v-if="showBtn"
                @click="openEditModal"
            >
                <i class="material-icons">edit</i>
            </a>
            <a
                class="btn-floating btn-small waves-effect waves-light red"
                v-if="showBtn"
                @click="handleDeleteBook()"
            >
                <i class="material-icons">delete</i>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { bookValidator } from '../../Utils';

export default {
    name: 'BookCard',
    data() {
        return {
            bookId: this.book.id,
        }
    },
    props: {
        book: {
            type: Object,
            required: true,
            validator: bookValidator
        },
        userId: {
            type: [String, Number],
            required: true,
            default: ''
        }
    },
    methods: {
        ...mapActions('books', {
            addFavBook: 'addFavBookAction',
            removeFavBook: 'removeFavBookAction',
            deleteBook: 'deleteBookAction',
            addBookForEdit: 'updateNewBookAction',
        }),
        openEditModal: function() {
            this.addBookForEdit(this.book)
            this.$emit('modalToOpen', 'editBookModal')
        },
        handleFavBook() {
            return this.book.favourite ? 
            this.removeFavBook(this.book) : this.addFavBook(this.book);
        },
        handleDeleteBook() {
            const ans = confirm('Are you sure you want to delete this book?');
            if (ans) return this.deleteBook(this.book);
        },
    },
    computed: {
        fav() {            
            return this.book.favourite || this.$route.name.includes('Favourite')
                ? 'favorite' : 'favorite_border'
        },
        showActionBar() {
            return this.$route.name !== 'Home';
        },
        showBtn() {
           const { user } = this.book;
           if (user) return user.id === this.userId;
           return false;
        }
    },
}
</script>

<style lang="scss" src="./bookCard.scss" scoped>
</style>

