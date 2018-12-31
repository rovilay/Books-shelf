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
                    <label for="autocomplete-input">
                        Book Title <span class="danger">*</span>
                    </label>
                </div>
                <div class="input-field col s12">
                    <input
                        type="number" id="autocomplete-input 2"
                        class="autocomplete" required
                        v-model="book.price"
                        min="0.00" step="0.01"
                    >
                    <label for="autocomplete-input">
                        Price<span class="danger">*</span>
                    </label>
                </div>
                <div class="input-field col s12">
                    <input
                        type="number" id="autocomplete-input 3"
                        class="autocomplete" required
                        v-model="book.isbn"
                    >
                    <label for="autocomplete-input">
                        Isbn <span class="danger">*</span>
                    </label>
                </div>
                <div class="bs-img-field">
                    <label for="img-title">image</label>
                    <input
                        type="file"
                        minlength="7"
                        id="book-image"
                        @change="handleImageUpload"
                    >
                    <span v-show="imageName || book.image_name">
                        {{imageName || book.image_name}}
                    </span>
                </div>
                    <div class="progress bs-progress bs-color-bg-deep" v-show="uploading">
                        <div class="indeterminate bs-color-bg"></div>
                    </div>
                    <div class="error danger" v-if="uploadError">
                        Image upload failed!
                    </div>
                    <div class="error danger" v-if="showImageSizeError">
                        Image size must not exceed 1.5 mb!
                    </div>
                <button
                    type="submit" 
                    class="waves-effect waves-light btn-large bs-btn auth-btn"
                    :disabled="!validBook"
                >
                    {{buttonLabel}} <i v-show="!posting" class="material-icons right">send</i>
                    <Spinner v-show="posting" />
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import imageUploader, { checkFileSize } from '../../Utils/imageUploader';
import Spinner from '../Spinner/index.vue';

export default {
    name: 'BookForm',
    data() {
        return {
            uploading: false,
            imageName: null,
            uploadError: null,
            validFileSize: null
        }
    },
    components: { Spinner },
    methods: {
        ...mapActions('books', {
            updateNewBook: 'updateNewBookAction',
            updateBook: 'updateBookAction',
            postNewBook: 'postNewBookAction',
        }),
        uploadImage: async function(fileInputId) {
            this.uploading = true;
            const response = await imageUploader(fileInputId);

            if (response && response.status === 200) {
                this.book.image_name = response.data.original_filename;
                this.imageName = response.data.original_filename;
                this.book.image = response.data.secure_url;
                this.uploading = false;
            } else if (response && response.status !== 200) {
                this.uploading = false;
                this.uploadError = true;                
            }
        },
        handleImageUpload: async function(e) {
            const fileInput = e.target;
            this.validFileSize = checkFileSize(fileInput);

            if (this.validFileSize) {
                const fileInputId = fileInput.id;
                await this.uploadImage(fileInputId);
            }
        },
        submitForm: function(e) {
            e.preventDefault();
            if (this.validBook) {
                this.updateNewBook(this.book);
                const res = this.buttonLabel.toLowerCase().match('update') ?
                    this.updateBook(this.book.id) : this.postNewBook();
                
                res.then(val => {
                    if(val) this.$emit('closeModal');
                });
            }
        },
        onEditBook: function() {
            if (this.book) {
                const { title, isbn, price } = this.book;
                this.title = title;
                this.isbn = isbn;
                this.price = price;
            }
        }
    },
    props: {
        buttonLabel: { type: String, required: true },
    },
    computed: {
        ...mapState('books', { book: 'newBook', posting: 'postingBook' }),
        showImageSizeError: function() {
            return this.validFileSize === false && !this.uploading;
        },
        validBook: function() {
            const { title, price, isbn } = this.book;
            return title && price && isbn;
        }
    }
}
</script>

<style lang="scss" src="./bookform.scss" scoped>
</style>
