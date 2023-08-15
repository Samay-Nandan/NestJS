import { lazily } from '@src/utils';

export const Home = lazily(import('@src/pages/home'), 'Home');
export const ProductDetails = lazily(
  import('@src/pages/productDetails'),
  'ProductDetails'
);
