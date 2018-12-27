const bookValidator = function(book) {
    const bookKeys = new Set(Object.keys(book));
    const validKeys = new Set(['id', 'name', 'price', 'isbn', 'image']);
    const intersection = new Set(
        [...bookKeys].filter(key => validKeys.has(key)));
    
    return intersection.size === validKeys.size
}

export default bookValidator;
