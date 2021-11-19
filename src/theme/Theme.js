import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#ffd740' },
    secondary: { main: '#102541' },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
      },
    },
  },
});
