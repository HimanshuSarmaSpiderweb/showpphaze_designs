import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import RequestNowButton from "./RequestNowButton";
import logoSvg from "../assets/logo.svg";

const Header = () => {

  const isTablet = useMediaQuery("(max-width:1400px)");

  return (
    <Box
      sx={{
        width: '100%',
        marginBottom: "0.5rem",
        maxWidth: "1000px",
        backgroundImage: 'url("your-background-pattern.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // padding: '0 0 1.5rem',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Left Section: Logo and Text */}
      <img 
        src={logoSvg}
        style={{
          width: isTablet ? "15rem" : "25rem"
        }}
      />

      {/* Vertical Separator with Gradient */}
      <Box
        sx={{
          width: '0.125rem', // 2px width
          height: '5rem',
          background: 'linear-gradient(to bottom, #FF69B4, #00BFFF)',
        }}
      />

      {/* Right Section: Separator, then Button and Contact Info */}
      <Stack direction="row" alignItems="center" spacing={5}
        sx={{
          display: "flex",
          justifyContent: isTablet ? "flex-end" : "flex-start"
        }}
      >
        {/* Button and Contact Info */}
        <Box
          sx={{
            width: isTablet ? "fit-content" : "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: isTablet ? "fit-content" : "100%"
            }}
          >
            <RequestNowButton />
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: '#fff',
              marginTop: '1rem',
              textAlign: 'center', // Align contact info to the right
            }}
          >
            OFFICE: 512-640-4212 |{' '}
            {isTablet ? <br /> : null}
            <span
              style={{
                fontWeight: 'bold',
                borderBottom: '1px solid #fff', // This adds the white border
                paddingBottom: '2px', // Optional: Adds a little space between the text and the border
              }}
            >
              BOOKINGS@SHOWPHAZE.COM
            </span>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;