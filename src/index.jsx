import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsApp from './ProductsApp';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/Theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductsApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
