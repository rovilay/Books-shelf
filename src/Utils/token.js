import jwt from 'jsonwebtoken';
import isExpired from './isExpired';

export const refineToken = (token) => {
    const reg = /^(b')/;
    if (reg.test(token)) {
        const refinedToken = token.split("'")[1];
        return refinedToken;
    }

    return token;
};

export const decodeToken = (token) => {
    const t = token || localStorage.getItem('bs-token');

    if (t) {
        const refinedToken = refineToken(t);
        const decoded = jwt.decode(refinedToken);
        return decoded;
    }

    return false;
}

export const validateToken = () => {
   const decodedToken = decodeToken();
   if (decodedToken) {
        const { exp: expireTime } = decodedToken;
        if (expireTime && !isExpired(expireTime)) return true;
        localStorage.removeItem('bs-token');
        return false;
   }

   return false;
}
