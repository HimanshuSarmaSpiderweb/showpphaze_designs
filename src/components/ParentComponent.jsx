import { Box } from "@mui/material";
import Header from "./Header";
import TabSection from "./TabSection";

const ParentComponent = ({
  tabs,
  tabLabels,
  currentTab,
  setCurrentTab
}) => {

  console.log(tabs, tabLabels, currentTab, `ParentComponent`)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          borderRadius: "1.5rem",
          border: `7px solid #c47ab2`,
          padding: "4rem",
        }}
      >
        <Header />
        <TabSection 
          tabs={tabLabels}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        {tabs[`${currentTab}`]}
      </Box>
    </>
  )
};

export default ParentComponent;