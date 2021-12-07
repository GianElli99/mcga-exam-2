import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductOverview } from './ProductOverview';
import { getProductsAsync } from '../../redux/actions/productsActions';

export const ProductsPublicScreen = () => {
  const { list } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
    return () => {};
  }, []);

  return (
    <div>
      <h1>We are Easy Buy</h1>
      <p>There is no need to explain what we do well...</p>
      {list &&
        list.map((prod) => <ProductOverview product={prod} key={prod._id} />)}
    </div>
  );
};
