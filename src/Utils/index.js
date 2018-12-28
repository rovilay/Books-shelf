export const bookValidator = function(book) {
    const bookKeys = new Set(Object.keys(book));
    const validKeys = new Set(['id', 'title', 'price', 'isbn', 'image']);
    const intersection = new Set(
        [...bookKeys].filter(key => validKeys.has(key)));
    
    return intersection.size === validKeys.size
}

export const currencyFilter = (amount, symbol) => {
    return `${symbol}${amount.toFixed(2)}`;
}

