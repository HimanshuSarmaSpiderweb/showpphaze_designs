import { Box, CircularProgress, Typography } from "@mui/material";
import LiveEventServiceAgreement from "../assets/live_event_service_agreement_forPrint.pdf";
import LiveEventRateCard from "../assets/Live_Event_Rate_Card.pdf";
import LiveEventRateSheet from "../assets/live_event_rate_sheet_forPrint.pdf";
import React from "react";

const DownloadButton = ({
  name,
  url
}) => {

  console.log(name, url, `DownloadButton`)

  const [isLoading, setIsLoading] = React.useState(false);

  const handleDownload = async () => {

    if (isLoading) return; // Prevent multiple clicks while loading

    try {

      setIsLoading(true);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.setAttribute("download", name);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "15rem",
        background: 'linear-gradient(to top, #bd77b1, #1c527a, #1fa1c6)',
        padding: '0.25rem 4rem',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={handleDownload} // Add the onClick handler here
    >
      <Typography
        variant="button"
        sx={{
          color: '#FFFFFF',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          letterSpacing: '0.1rem',
          textTransform: 'none',
        }}
      >
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Download PDF"
        )}
      </Typography>
    </Box>
  );
};

export default DownloadButton;