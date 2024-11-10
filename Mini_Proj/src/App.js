import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline, Toolbar, ThemeProvider, Menu, MenuItem, Button } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import DrawerComponent from './DrawerComponent';
import HeaderComponent from './HeaderComponent';
import Aim from './pages/Aim';
import Theory from './pages/Theory';
import Pretest from './pages/Pretest';
import Procedure from './pages/Procedure';
import Simulation from './pages/Simulation';
import Posttest from './pages/Posttest';
import References from './pages/References';
import Feedback from './pages/Feedback';
import { lightTheme, darkTheme, blueTheme, redTheme, greenTheme, yellowTheme, purpleTheme, pinkTheme, orangeTheme, tealTheme, indigoTheme } from './theme'; // Import all themes

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);  // Default to light theme
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Handle opening the theme menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle closing the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle changing the theme
  const handleThemeChange = (theme) => {
    switch (theme) {
      case 'light':
        setCurrentTheme(lightTheme);
        break;
      case 'dark':
        setCurrentTheme(darkTheme);
        break;
      case 'blue':
        setCurrentTheme(blueTheme);
        break;
      case 'red':
        setCurrentTheme(redTheme);
        break;
      case 'green':
        setCurrentTheme(greenTheme);
        break;
      case 'yellow':
        setCurrentTheme(yellowTheme);
        break;
      case 'purple':
        setCurrentTheme(purpleTheme);
        break;
      case 'pink':
        setCurrentTheme(pinkTheme);
        break;
      case 'orange':
        setCurrentTheme(orangeTheme);
        break;
      case 'teal':
        setCurrentTheme(tealTheme);
        break;
      case 'indigo':
        setCurrentTheme(indigoTheme);
        break;
      default:
        setCurrentTheme(lightTheme);
    }
    handleMenuClose();
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <HeaderComponent onDrawerToggle={handleDrawerToggle} />
        <Box sx={{ display: 'flex' }}>
          {/* Drawer Component */}
          <DrawerComponent open={drawerOpen} onClose={handleDrawerToggle} />
          
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              p: 3,
              height: '100vh',
              overflow: 'auto',
              marginTop: '64px',
            }}
          >
            <Toolbar />
            {/* Theme selection dropdown */}
            <Box sx={{ position: 'absolute', bottom: '20px', right: '20px' }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowDropDown />}
                onClick={handleMenuOpen}
              >
                Change Theme
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleThemeChange('light')}>Light Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('dark')}>Dark Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('blue')}>Blue Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('red')}>Red Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('green')}>Green Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('yellow')}>Yellow Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('purple')}>Purple Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('pink')}>Pink Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('orange')}>Orange Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('teal')}>Teal Theme</MenuItem>
                <MenuItem onClick={() => handleThemeChange('indigo')}>Indigo Theme</MenuItem>
              </Menu>
            </Box>

            <Routes>
              <Route path="/Aim" element={<Aim />} />
              <Route path="/theory" element={<Theory />} />
              <Route path="/pretest" element={<Pretest />} />
              <Route path="/procedure" element={<Procedure />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/posttest" element={<Posttest />} />
              <Route path="/references" element={<References />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
