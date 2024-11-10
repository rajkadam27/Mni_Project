// src/theme.js
import { createTheme } from '@mui/material/styles';

// Light Theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#d32f2f',
    },
    background: {
      default: '#f4f6f8',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#555',
    },
  },
});

// Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#fff',
      secondary: '#ccc',
    },
  },
});

// Blue Theme
const blueTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#00bcd4',
    },
    background: {
      default: '#e3f2fd',
      paper: '#bbdefb',
    },
    text: {
      primary: '#0d47a1',
      secondary: '#0288d1',
    },
  },
});

// Red Theme
const redTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#e57373',
    },
    background: {
      default: '#ffebee',
      paper: '#ffcdd2',
    },
    text: {
      primary: '#d32f2f',
      secondary: '#c2185b',
    },
  },
});

// Green Theme
const greenTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#8bc34a',
    },
    background: {
      default: '#e8f5e9',
      paper: '#c8e6c9',
    },
    text: {
      primary: '#388e3c',
      secondary: '#2c6e2f',
    },
  },
});

// Yellow Theme
const yellowTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffeb3b',
    },
    secondary: {
      main: '#ff9800',
    },
    background: {
      default: '#fff9c4',
      paper: '#fff59d',
    },
    text: {
      primary: '#fbc02d',
      secondary: '#f57f17',
    },
  },
});

// Purple Theme
const purpleTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      main: '#ab47bc',
    },
    background: {
      default: '#f3e5f5',
      paper: '#e1bee7',
    },
    text: {
      primary: '#8e24aa',
      secondary: '#7b1fa2',
    },
  },
});

// Pink Theme
const pinkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#f06292',
    },
    background: {
      default: '#f8bbd0',
      paper: '#f48fb1',
    },
    text: {
      primary: '#c2185b',
      secondary: '#ad1457',
    },
  },
});

// Orange Theme
const orangeTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#ff7043',
    },
    background: {
      default: '#ffccbc',
      paper: '#ffab91',
    },
    text: {
      primary: '#d32f2f',
      secondary: '#bf360c',
    },
  },
});

// Teal Theme
const tealTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#80cbc4',
    },
    background: {
      default: '#e0f2f1',
      paper: '#b2dfdb',
    },
    text: {
      primary: '#00796b',
      secondary: '#004d40',
    },
  },
});

// Indigo Theme
const indigoTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#7986cb',
    },
    background: {
      default: '#e8eaf6',
      paper: '#c5cae9',
    },
    text: {
      primary: '#303f9f',
      secondary: '#1a237e',
    },
  },
});

export { lightTheme, darkTheme, blueTheme, redTheme, greenTheme, yellowTheme, purpleTheme, pinkTheme, orangeTheme, tealTheme, indigoTheme };
