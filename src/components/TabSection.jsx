import { Box, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const TabSection = ({
  tabs = [],
  currentTab,
  setCurrentTab
}) => {

  const isTablet = useMediaQuery("(max-width:1400px)");

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        background: "transparent", // A dark color to match the image background
        marginBottom: "1.5rem"
        // padding: '2rem 0 0 0',
      }}
    >
      <Tabs
        // scrollButtons="auto"
        // variant="scrollable"
        value={currentTab}
        onChange={handleChange}
        aria-label="live event tabs"
        TabIndicatorProps={{
          sx: {
            background: 'linear-gradient(90deg, #c47ab2 0%, #00BFFF 100%)',
            height: '0.25rem',
          },
        }}
        sx={{
          '& .MuiTabs-flexContainer': {
            padding: "0 1rem",
            justifyContent: 'space-between',
          },
        }}
      >
        {tabs?.map?.(tab => {
          return (
            <Tab
              label={tab}
              sx={{
                width: "33%",
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '1.15rem',
                fontWeight: 'bold',
                padding: '0 2rem',
                textTransform: 'none',
                '&.Mui-selected': {
                  color: '#FFFFFF',
                },
              }}
            />
          )
        })}
      </Tabs>
    </Box>
  );
};

export default TabSection;