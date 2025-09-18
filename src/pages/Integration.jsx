import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import ResourcesListPage from '../pages/LiveEventRateSheet';

// Import the background images
import backgroundDesign1 from "../assets/Rectangle.svg";
import backgroundDesign2 from "../assets/backgroundLines.svg";
import ParentComponent from '../components/ParentComponent';
import IntegrationServiceAgreement from '../pages/IntegrationServiceAgreement';
import IntegrationRateSheet from '../pages/IntegrationRateSheet';
import IntegrationRateCard from '../pages/IntegrationRateCard';

function Integration() {

  const isTablet = useMediaQuery("(max-width:1400px)");
  const isMobile = useMediaQuery("(max-width:1150px)");

  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "0 auto",
        padding: "2rem",
        boxSizing: "border-box",
        // The background-repeat property is set to repeat-y for backgroundDesign2
        background: `url(${backgroundDesign2}) top left / 50% repeat-y, url(${backgroundDesign1}) top right / 50% repeat-y, linear-gradient(to right, #160e42, #330f44)`,
      }}
    >
      <Box
        sx={{
          width: isMobile ? "95%" : isTablet ? "80%" : "75%",
          maxWidth: isMobile ? "none" : "1500px",
          position: "relative",
          zIndex: "1",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <ParentComponent
          tabs={{
            0: <IntegrationRateCard />,
            1: <IntegrationServiceAgreement />,
            2: <IntegrationRateSheet />
          }}  
          tabLabels={[
            "Integration Rate Card",
            "Install/Integration Service Integration",
            "Integration Rate Sheet",
          ]}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </Box>
    </Box>
  );
}

export default Integration;