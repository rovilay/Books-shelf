/* eslint no-console: 0 */
const modalMixin = {
    methods: {
        openModal: function(modalId) {
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'block';
            }
        },
        clickOutside: function(e, modalId) {
            const modal = document.getElementById(modalId);
            if (modal && e.target === modal) {
                modal.style.display = 'none';
            }
        },
        closeModal: function(modalId) {
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'none';
            }
        },
        initModal: function() {
            window.addEventListener('click', this.clickOutside);
        }
    },
    // created: function() {
    //     this.initModal()
    // }
};

export default modalMixin;
