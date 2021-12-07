import React from 'react';
import { useNavigate } from 'react-router';

export const PublicHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/login')}>Log in</button>
    </div>
  );
};
