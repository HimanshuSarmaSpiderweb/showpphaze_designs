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

function App() {

  const isTablet = useMediaQuery("(max-width:1400px)");
  const isMobile = useMediaQuery("(max-width:1150px)");

  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <LiveEvent />
  );
}

export default App;