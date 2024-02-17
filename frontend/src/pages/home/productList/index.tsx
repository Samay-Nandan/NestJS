import { useEffect } from 'react';
import { FetchAllProduct } from '@src/store/action';
import { useAppDispatch, useAppSelector } from '@src/store';
import { Loader, ProductListing } from '@src/components';
import { ProductDto } from '@src/store/dto';

export const ProductList = () => {
  const dispatch = useAppDispatch();
  const { loading, products } = useAppSelector(
    ({ ProductReducer }) => ProductReducer
  );

  useEffect(() => {
    dispatch(FetchAllProduct());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="p-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product: ProductDto) => (
        <ProductListing key={product.id} product={product} />
      ))}
    </div>
  );
};
