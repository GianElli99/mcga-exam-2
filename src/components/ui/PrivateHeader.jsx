import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { LogOut } from '../../redux/actions/authActions';
import Button from '@mui/material/Button';
import styles from './PrivateHeader.module.css';

export const PrivateHeader = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(LogOut());
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Hi, {username}</p>
      <Button
        onClick={handleLogOut}
        variant="outlined"
        size="small"
        color="error"
      >
        Log out
      </Button>
    </div>
  );
};
