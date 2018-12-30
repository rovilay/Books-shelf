const mutations = {
    postUser: function(state) {
        state.loading = true;
    },
    postUserSuccess: function(state, response) {
        const { userDetails, success, message } = response;

        state.user.details = userDetails;
        state.success = success;
        state.message = message;
        state.user.loggedIn = true;
        state.loading = false;
        state.errors = null;
    },
    postUserFailure: function(state, error) {
        state.errors = error;
        state.loading = false;
        state.success = false;
        state.message = ''
    },
    logOutUser: function(state) {
        state.user = {
            details: null,
            loggedIn: false
        };
        state.message = '';
        state.loading = false;
        state.success = false;
        state.errors = null;
    }
};

export default mutations;
