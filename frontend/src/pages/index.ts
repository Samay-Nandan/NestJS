import { lazily } from '@src/utils';

export const Home = lazily(import('@src/pages/home'), 'Home');
export const ProductInfo = lazily(
  import('@src/pages/productInfo'),
  'ProductInfo'
);
