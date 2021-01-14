import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#46697E',
    },
    secondary: {
      main: '#D26267',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F5F5F5',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: 10,
      },
    },
  },
});

export default theme;
