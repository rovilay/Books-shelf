const getters = {
    getBestSellers: function(state) {
        return [...state.books].slice(6);
    },
    getFavourites: function(state) {
        return state.books.filter(book => book.favourite)
    },
    getNewReleases: function(state) {
        return [...state.books].slice(0, 3);
    }
}

export default getters;
