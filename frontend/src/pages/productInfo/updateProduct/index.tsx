import { toast } from 'react-toastify';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@src/store';
import { UpdateProductById } from '@src/store/action';
import { convertNumericStringsInObject } from '@src/utils';
import { PRODUCT_UPDATED_SUCCESSFULLY } from '@src/constant';
import {
  UpdateProductProps,
  ProductFormData,
  ProductFormInputProps,
} from '@src/pages/productInfo/dto';

const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'price', label: 'Price', type: 'number' },
  { name: 'quantity', label: 'Quantity', type: 'number' },
  { name: 'image', label: 'Image URL', type: 'text' },
];

const ProductFormInput: FC<ProductFormInputProps> = ({
  register,
  name,
  label,
  type,
  errors,
  step,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      {...register(name as keyof ProductFormData, {
        required: `${label} is required`,
      })}
      placeholder={label}
      type={type}
      className={`mt-1 block w-full px-3 py-2 bg-white border ${
        errors[name] ? 'border-red-500' : 'border-gray-300'
      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      step={step}
    />
    {errors[name] && (
      <span className="text-xs text-red-500">{label} is required</span>
    )}
  </div>
);

export const UpdateProduct: FC<UpdateProductProps> = ({ setUpdateProduct }) => {
  const dispatch = useAppDispatch();
  const { error, product } = useAppSelector(
    ({ ProductReducer }) => ProductReducer
  );
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: {
      ...product,
      price: +product.price.toString().replace('₹', ''),
    },
  });

  useEffect(() => {
    if (!error && loading) {
      toast.success(PRODUCT_UPDATED_SUCCESSFULLY, {
        toastId: PRODUCT_UPDATED_SUCCESSFULLY,
      });
      setLoading(false);
      setUpdateProduct(false);
    }
  }, [error, loading]);

  const onSubmit = (data: ProductFormData) => {
    setLoading(true);
    dispatch(
      UpdateProductById({
        id: data.id,
        body: convertNumericStringsInObject(data),
      })
    );
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      onClick={() => setUpdateProduct(false)}
    >
      <div
        className="relative p-5 border w-96 shadow-lg rounded-md bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-lg font-bold text-center mb-4">Update Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formFields.map(({ name, label, type }) => (
            <ProductFormInput
              key={name}
              register={register}
              name={name}
              label={label}
              type={type}
              errors={errors}
              step={name === 'price' ? 0.01 : undefined}
            />
          ))}
          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </form>
        <button
          onClick={() => setUpdateProduct(false)}
          className="mt-3 w-full px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};
