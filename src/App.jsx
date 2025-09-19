import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import ResourcesListPage from './pages/LiveEventRateSheet';

// Import the background images
import backgroundDesign1 from "./assets/Rectangle.svg";
import backgroundDesign2 from "./assets/backgroundLines.svg";
import Page1 from './pages/LiveEventRateCard';
import Page2 from './pages/IntegrationRateCard';
import ParentComponent from './components/ParentComponent';
import LiveEventServiceAgreement from './pages/LiveEventServiceAgreement';
import IntegrationServiceAgreement from './pages/IntegrationServiceAgreement';
import IntegrationRateSheet from './pages/IntegrationRateSheet';
import IntegrationRateCard from './pages/IntegrationRateCard';
import LiveEventRateCard from './pages/LiveEventRateCard';
import Integration from './pages/Integration';
import LiveEvent from './pages/LiveEvent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const isTablet = useMediaQuery("(max-width:1400px)");
  const isMobile = useMediaQuery("(max-width:1150px)");

  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/liveevent" element={
          <Box
            sx={{
              width: "100%",
              height: "100%",
              minWidth: "1300px",
              overflowX: "auto",
              lineHeight: 1.5,
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.87)',
              fontFamily: 'Roboto, sans-serif',
              // The following properties are not direct CSS properties for styling a component,
              // so they cannot be directly translated to the `sx` prop.
              // They are typically applied globally or by the browser.
              //
              // colorScheme: 'light dark',
              // fontSynthesis: 'none',
              // textRendering: 'optimizeLegibility',
              // '-webkit-font-smoothing': 'antialiased',
              // '-moz-osx-font-smoothing': 'grayscale',
            }}
          >
            <LiveEvent />
            {/* <Integration /> */}
          </Box>
          } />
        <Route path="/integration" element={
          <Box
            sx={{
              width: "100%",
              height: "100%",
              minWidth: "1300px",
              overflowX: "auto",
              lineHeight: 1.5,
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.87)',
              fontFamily: 'Roboto, sans-serif',
              // The following properties are not direct CSS properties for styling a component,
              // so they cannot be directly translated to the `sx` prop.
              // They are typically applied globally or by the browser.
              //
              // colorScheme: 'light dark',
              // fontSynthesis: 'none',
              // textRendering: 'optimizeLegibility',
              // '-webkit-font-smoothing': 'antialiased',
              // '-moz-osx-font-smoothing': 'grayscale',
            }}
          >
            <Integration />
          </Box>
        } />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;