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
                @click="openEditModal"
            >
                <i class="material-icons">edit</i>
            </a>
            <a
                class="btn-floating btn-small waves-effect waves-light red"
                v-if="showDeleteBtn"
                @click="handleDeleteBook()"
            >
                <i class="material-icons">delete</i>
            </a>
        </div>
    </div>
</template>

<script>
import { bookValidator } from '../../Utils';
import image1 from '../../assets/images/img1.jpeg';
import image2 from '../../assets/images/img2.jpeg';
import image3 from '../../assets/images/img3.jpeg';
import image4 from '../../assets/images/book-demo.jpeg';
import image5 from '../../assets/images/open-book.jpeg';
import { mapActions } from 'vuex';

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
        }
    },
    methods: {
        ...mapActions('books', {
            addFavBook: 'addFavBookAction',
            removeFavBook: 'removeFavBookAction',
            deleteBook: 'deleteBookAction',
        }),
        openEditModal: function() {
            this.$emit('modalToOpen', 'editBookModal', this.book)
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
        modal() {
            return document.getElementById(this.book.id)
        },
        fav() {            
            return this.book.favourite || this.$route.name.includes('Favourite')
                ? 'favorite' : 'favorite_border'
        },
        showActionBar() {
            return this.$route.name !== 'Home';
        },
        showDeleteBtn() {
           const { user } = this.book;
           if (user) return user.id === this.userId;
           return false;
        }
    },
}
</script>

<style lang="scss" src="./bookCard.scss" scoped>
</style>

