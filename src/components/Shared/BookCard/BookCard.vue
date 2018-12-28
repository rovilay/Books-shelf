<template>
    <div class="book-card" :style="{backgroundImage: 'url(' + randomImage + ')'}">
        <div class="book-action">
            <a class="btn-floating btn-small waves-effect waves-light red">
                <i class="material-icons">{{fav}}</i>
            </a>
            <a
                class="btn-floating btn-small waves-effect waves-light red"
                @click="openEditModal"
            >
                <i class="material-icons">edit</i>
            </a>
            <a class="btn-floating btn-small waves-effect waves-light red">
                <i class="material-icons">delete</i>
            </a>
        </div>
    </div>
</template>

<script>
import { bookValidator } from '../../../Utils';
import image1 from '../../../assets/images/img1.jpeg';
import image2 from '../../../assets/images/img2.jpeg';
import image3 from '../../../assets/images/img3.jpeg';
import image4 from '../../../assets/images/book-demo.jpeg';
import image5 from '../../../assets/images/open-book.jpeg';

export default {
    name: 'BookCard',
    data() {
        return {
            fav: 'favorite_border',
            bookId: this.book.id,
        }
    },
    props: {
        book: {
            type: Object,
            required: true,
            validator: bookValidator
        }
    },
    methods: {
        getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        },
        openEditModal: function() {
            this.$emit('modalToOpen', 'editBookModal', this.book)
        }
    },
    computed: {
        randomImage() {
            const images = [image1, image2, image3, image4, image5];
            const randInt = this.getRandomInt(images.length);
            return images[randInt]
        },
        modal() {
            return document.getElementById(this.book.id)
        }
    },
}
</script>

<style lang="scss" src="./bookCard.scss" scoped>
</style>

