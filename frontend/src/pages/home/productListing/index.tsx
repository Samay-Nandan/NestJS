import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { FetchAllProduct } from '@src/store/action';
import { useAppDispatch, useAppSelector } from '@src/store';
import { Loader, SingleProduct } from '@src/components';
import { ProductDto } from '@src/store/dto';

export const ProductListing = () => {
  const dispatch = useAppDispatch();
  const { loading, error, products } = useAppSelector(
    (state) => state.ProductReducer
  );

  useEffect(() => {
    dispatch(FetchAllProduct());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) toast.error(error, { toastId: error });

  return (
    <div className="p-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product: ProductDto) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
