import { validateToken } from '../Utils/token';
import router from '../routes';

export default {
    beforeCreate: function() {
        const validToken = validateToken();
        if (!validToken) return router.push({ name: 'Login' });
    },
}
