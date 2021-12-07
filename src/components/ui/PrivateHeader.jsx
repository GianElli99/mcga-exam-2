import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LogOut } from '../../redux/actions/authActions';
import styles from './PrivateHeader.module.css';

export const PrivateHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(LogOut());
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Gian&apos;s Products</h1>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};
