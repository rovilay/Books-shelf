import { validateToken, decodeToken } from '../Utils/token';
import router from '../routes';

export default {
    data() {
        return { userInfo: { id: '' } }
    },
    methods: {
        getUserInfo: function() {
            const details = decodeToken();
            if(details) return  this.userInfo = details;
            return this.userInfo = { id: '' };
        }
    },
    beforeCreate: function() {
        const validToken = validateToken();
        if (!validToken) return router.push({ name: 'Login' });
    },
    created: function() {
        this.getUserInfo();
    }
}
