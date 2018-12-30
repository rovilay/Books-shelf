const isExpired = (expiredTimeInSec) => {
    if (expiredTimeInSec) {
      const now = new Date();
      const nowInSec = Math.floor(now.getTime() * 0.001); // Convert date to sec
      return nowInSec > expiredTimeInSec;
    }
  };

export default isExpired;
