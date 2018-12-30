const apiErrorHandler = (error) => {
    if (error.response && error.response.status) {
        switch(error.response.status) {
            case 500:
                return 'Server Error. Try again later!';
            default:
                return error.response.data.message || 'An Error Occurred';
        }
    } else {
        return 'Network Error. Try again later!';
    }
};

export default apiErrorHandler;
