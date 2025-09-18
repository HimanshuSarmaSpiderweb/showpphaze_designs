import { Box, Typography, Grid, Checkbox, Tabs, Tab, Stack, TextField } from '@mui/material';

const AgreedAndAccepted = () => {
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
            overflow: 'hidden',
          }}
        >
          <Typography
            sx={{
              marginBottom: "1rem !important",
              fontSize: "1.5rem !important",
              fontWeight: 'bold',
            }}
          >
            AGREED AND ACCEPTED BY:
          </Typography>
          <Box container spacing={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {/* Client Section */}
            <Box>
              <Typography sx={{ 
                fontSize: "1.15rem !important",
                fontWeight: 'bold' 
              }}>
                CLIENT NAME: Executed with fully authority
              </Typography>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                mt: 2
              }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Name:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Title:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Signature:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Date:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: '0.25rem', // 2px width
                height: '10rem',
                background: 'linear-gradient(to bottom, #c47ab2, #00BFFF)',
              }}
            />

            {/* ShowPhaze LLC Section */}
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>
                ShowPhaze LLC, executed with fully authority
              </Typography>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                mt: 2
              }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Name:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Title:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Signature:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                >
                  <Typography>Date:</Typography>
                  {/* <TextField 
                    sx={{
                      borderRadius: "0.5rem",
                      height: "2rem",
                      border: `1px solid white`,
                      outline: "none"
                    }}
                  /> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AgreedAndAccepted;