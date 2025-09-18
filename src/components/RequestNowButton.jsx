import { Box, Typography } from "@mui/material";

const RequestNowButton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "0.5rem",
        background: 'linear-gradient(to top, #bd77b1, #1c527a, #1fa1c6)',
        padding: '0.25rem 1.5rem',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxSizing: "border-box"
      }}
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
        Request Now
      </Typography>
    </Box>
  );
};

export default RequestNowButton;