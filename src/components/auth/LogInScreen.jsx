import React from 'react';
import { useDispatch } from 'react-redux';
import { LogIn } from '../../redux/actions/authActions';

export const LogInScreen = () => {
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(LogIn('Gian'));
  };

  return (
    <div>
      <button onClick={handleLogIn}>LogIn Gian</button>
    </div>
  );
};
