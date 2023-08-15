import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProductDto } from '@src/store/dto';
import { ROUTES } from '@src/constant';

interface SingleProductProps {
  product: ProductDto;
}

export const SingleProduct: FC<SingleProductProps> = ({ product }) => (
  <Link to={ROUTES.PRODUCT_DETAILS.replace(':id', product.id)}>
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center h-full">
      <div className="text-center">
        <img
          className="w-48 mx-auto mb-4 cursor-pointer"
          src={product.image}
          alt={product.name}
        />
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
      </div>
      <div className="mt-4 text-green-600 font-bold">
        Price: {product.price}
      </div>
    </div>
  </Link>
);
