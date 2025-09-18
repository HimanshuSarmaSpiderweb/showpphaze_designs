import { Box, Typography } from "@mui/material";
import LiveEventServiceAgreement from "../assets/live_event_service_agreement_forPrint.pdf";
import LiveEventRateCard from "../assets/Live_Event_Rate_Card.pdf";
import LiveEventRateSheet from "../assets/live_event_rate_sheet_forPrint.pdf";

const DownloadButton = () => {
  const filesToDownload = [
    { name: "ServiceAgreement.pdf", url: LiveEventServiceAgreement },
    { name: "RateCard.pdf", url: LiveEventRateCard },
    { name: "RateSheet.pdf", url: LiveEventRateSheet },
  ];

  const handleDownload = () => {
    filesToDownload.forEach((file) => {
      const link = document.createElement("a");
      link.href = file.url;
      link.setAttribute("download", file.name); // Set the download attribute with a file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Box
      sx={{
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
        Download PDF
      </Typography>
    </Box>
  );
};

export default DownloadButton;