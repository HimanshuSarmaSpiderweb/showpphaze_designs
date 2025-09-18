import { Box, Typography, Grid, Checkbox, Tabs, Tab, Stack, TextField } from '@mui/material';

const ServiceDetails = () => {
  return (
    <Box
      sx={{
        width: '100%',
        color: '#FFFFFF',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          borderRadius: '1.25rem',
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Services Section */}
          <Box>
            <Typography
              sx={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#FFFFFF',
                mb: 2,
              }}
            >
              The Services are to be performed at the following event:
            </Typography>
            <Box container spacing={2}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                borderRadius: "0.25rem",
                border: `1px solid rgba(255, 255, 255, 0.3)`,
                padding: "1rem",
                boxSizing: "border-box"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "50%"
                }}
              >
                <Box item xs={12} sm={6}>
                  <Typography>Client :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Event Venue :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Estimated hours of event production services :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Estimated number of ShowPhaze personnel :</Typography>
                </Box>
                <Box item xs={12} sm={6}>
                  <Typography>Equipment to be provided by ShowPhaze :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Anticipated additional expenses :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>ShowPhaze on-site contact :</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "50%"
                }}
              >
                <Box item xs={12} sm={6}>
                  <Typography>Event Name :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Location/Address :</Typography>
                </Box>

                <Box item xs={12} sm={6}>
                  <Typography>Load in time :</Typography>
                </Box>



                <Box item xs={12} sm={6}>
                  <Typography>Client on-site contact :</Typography>
                </Box>
              </Box>

            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceDetails;