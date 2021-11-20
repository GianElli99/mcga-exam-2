import React from 'react';
import { MainRouter } from './routers/MainRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/Theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
