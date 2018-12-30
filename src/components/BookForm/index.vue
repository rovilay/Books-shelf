<template>
    <div class="add-book">
        <div class="form-container">
            <form @submit="submitForm">
                <div class="input-field col s12">
                    <input 
                        type="text" id="autocomplete-input 1" 
                        class="autocomplete" required
                        v-model="book.title"
                    >
                    <label for="autocomplete-input">Book Title</label>
                </div>
                <div class="input-field col s12">
                    <input
                        type="number" id="autocomplete-input 2"
                        class="autocomplete" required
                        v-model="book.price"
                        min="0.00" step="0.01"
                    >
                    <label for="autocomplete-input">Price</label>
                </div>
                <div class="input-field col s12">
                    <input
                        type="number" id="autocomplete-input 3"
                        class="autocomplete" required
                        v-model="book.isbn"
                    >
                    <label for="autocomplete-input">Isbn</label>
                </div>
                <div class="bs-img-field">
                    <label for="img-title">image</label>
                    <input
                        type="file" required
                        minlength="7"
                        id="book-image"
                        @change="uploadImage"
                    >
                    <span v-show="book.imageName">{{book.imageName}}</span>
                </div>
                    <div class="progress bs-progress bs-color-bg-deep" v-show="uploading">
                        <div class="indeterminate bs-color-bg"></div>
                    </div>
                    <div class="error danger" v-if="uploadError">
                        Image upload failed!
                    </div>
                <button
                    type="submit" 
                    class="waves-effect waves-light btn-large bs-btn auth-btn"
                >
                    {{buttonLabel}} <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
/* eslint no-console: 0 */
import imageUploader from '../../Utils/imageUploader';

export default {
    name: 'BookForm',
    data() {
        return {
            uploading: false,
            imageName: null,
            uploadError: null,
        }
    },
    methods: {
        uploadImage: async function(e) {
            const fileInput = e.target;
            const fileInputId = fileInput.id;
            this.uploading = true;
            const response = await imageUploader(fileInputId);
                console.log(response);

            if (response && response.status === 200) {
                console.log(response);
                this.book.imageName = response.data.original_filename;
                this.imageName = response.data.original_filename;
                this.book.image = response.data.secure_url;
                this.uploading = false;
            } else if (response && response.status !== 200) {
                this.uploading = false;
                this.uploadError = true;                
            }
        },
        submitForm: function(e) {
            e.preventDefault();
            const book = {
                title: this.title,
                price: this.price,
                isbn: this.isbn,
                image: this.imageUrl
            }
            this.$emit('newBook', book);
            console.log('form submitted'); // eslint-disable-line
        },
        onEditBook: function() {
            if (this.book) {
                const { title, isbn, price } = this.book;
                this.title = title;
                // this.image = image,
                this.isbn = isbn;
                this.price = price;
            }
        }
    },
    props: {
        buttonLabel: { type: String, required: true },
        book: { type: Object, required: true }
    },
    // created: function() {
    //     console.log('this books', this.book);
    //     this.onEditBook();
    // }
}
</script>

<style lang="scss" src="./bookform.scss" scoped>
</style>
