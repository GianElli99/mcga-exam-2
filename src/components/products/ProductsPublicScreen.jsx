/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductOverview } from './ProductOverview';
import Skeleton from '@mui/material/Skeleton';
import { getProductsAsync } from '../../redux/actions/productsActions';
import styles from './ProductsPublicScreen.module.css';

export const ProductsPublicScreen = () => {
  const { list, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
    return () => {};
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>We are Easy Buy</h1>
      <p className={styles.subtitle}>
        There is no need to explain what we do well...Branch
        {process.env.REACT_APP_IS_DEVELOP}
        <br />
      </p>
      <div className={styles.productsWrapper}>
        {isLoading && (
          <>
            <Skeleton
              variant="rectangular"
              width={400}
              height={150}
              sx={{ borderRadius: '1rem' }}
            />
            <Skeleton
              variant="rectangular"
              width={400}
              height={150}
              sx={{ borderRadius: '1rem' }}
            />
          </>
        )}
        {!isLoading &&
          list &&
          list.map((prod) => <ProductOverview product={prod} key={prod._id} />)}
      </div>
    </div>
  );
};
