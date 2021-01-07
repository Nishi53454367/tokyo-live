import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#CEE9E3',
    },
    secondary: {
      main: '#D26267',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#46697E',
    },
  },
});

export default theme;
