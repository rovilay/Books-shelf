import Vue from 'vue';

const toast = (message, type, position='top') => {
    return Vue.$toast.open({
        message,
        queue: true,
        type,
        position
    });
};

export default toast;
