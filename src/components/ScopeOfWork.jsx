import { Box, Typography, Grid, Checkbox, Tabs, Tab, Stack, TextField } from '@mui/material';


const ScopeOfWork = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem"
        }}
      >
        <Typography variant="h4" textAlign={"left"}
          sx={{
            fontSize: "1.25rem",
            fontWeight: "800"
          }}
        >
          SCOPE OF WORK
        </Typography>

        <Typography variant="body1" textAlign={"left"}
          sx={{
            fontSize: "1rem",
          }}
        >
          The Company agrees to provide the following event production services (“Services”) (check all that apply):
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem"
        }}
      >
        <Box
          sx={{
            padding: "1rem 0.5rem 1rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "0.35rem",
            border: `1px solid rgba(255, 255, 255, 0.6)`
          }}
        >
          <Typography
            sx={{
              fontWeight: "700"
            }}
          >
            AUDIO ENGINEERING
          </Typography>

          <Checkbox 
            sx={{
              color: "white"
            }}
          />
        </Box>

        <Box
          sx={{
            padding: "1rem 0.5rem 1rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "0.35rem",
            border: `1px solid rgba(255, 255, 255, 0.6)`
          }}
        >
          <Typography
            sx={{
              fontWeight: "700"
            }}
          >
            LIGHTING TECHNICIAN
          </Typography>

          <Checkbox 
            sx={{
              color: "white"
            }}
          />
        </Box>

        <Box
          sx={{
            padding: "1rem 0.5rem 1rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "0.35rem",
            border: `1px solid rgba(255, 255, 255, 0.6)`
          }}
        >
          <Typography
            sx={{
              fontWeight: "700"
            }}
          >
            CAMERA AND VIDEO OPERATION
          </Typography>

          <Checkbox 
            sx={{
              color: "white"
            }}
          />
        </Box>

        <Box
          sx={{
            padding: "1rem 0.5rem 1rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRadius: "0.35rem",
            border: `1px solid rgba(255, 255, 255, 0.6)`
          }}
        >
          <Typography
            sx={{
              fontWeight: "700"
            }}
          >
            EVENT MANAGEMENT SERVICES
          </Typography>

          <Checkbox 
            sx={{
              color: "white"
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}


export default ScopeOfWork;