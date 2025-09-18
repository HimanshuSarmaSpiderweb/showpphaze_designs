import { Box, Typography } from "@mui/material";
import qrImg from "../assets/qr.svg";

const QRSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Typography
        sx={{
          fontSize: "0.75rem",
          textAlign: "center"
        }}
      >
        Showphaze App
      </Typography>

      <img 
        src={qrImg}
      />
    </Box>
  )
}

export default QRSection;