import { validateToken, decodeToken } from '../Utils/token';
import router from '../routes';

export default {
    computed: {
        userInfo: function() {
            const details = decodeToken();
            if(details) return details;
            return { id: '' };
        }
    },
    beforeCreate: function() {
        const validToken = validateToken();
        if (!validToken) return router.push({ name: 'Login' });
    },
}
