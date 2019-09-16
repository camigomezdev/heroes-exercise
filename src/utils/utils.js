import md5 from 'js-md5';
import { MARVEL_KEY_PRIVATE, MARVEL_KEY_PUBLIC } from '../credentials';

const getAuth = () => {
  const ts = Date.now();
  const hash = md5(ts + MARVEL_KEY_PRIVATE + MARVEL_KEY_PUBLIC);
  return { ts, hash, publicKey: MARVEL_KEY_PUBLIC };
};

export default getAuth;
