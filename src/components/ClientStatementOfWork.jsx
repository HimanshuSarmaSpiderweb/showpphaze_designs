import { Box, Typography, Grid, Checkbox, Tabs, Tab, Stack, TextField } from '@mui/material';

const ClientStatementOfWork = () => {
  return (
    <Box
      sx={{
        width: '100%',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          borderRadius: '1.25rem',
          padding: '0.125rem', // Creates the 2px border effect
        }}
      >
        <Box
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center the content
            textAlign: 'center', // Center the text
          }}
        >
          {/* Header */}
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#FFFFFF',
              mb: 1,
              borderBottom: `1px solid white`
            }}
          >
            EXHIBIT B
          </Typography>
          <Typography
            sx={{
              fontSize: '1.75rem !important',
              fontWeight: 'bold',
              color: '#FFFFFF',
              my: 2
            }}
          >
            CLIENT STATEMENT OF WORK
          </Typography>

          {/* Text Content */}
          <Typography sx={{ fontSize: '1rem', color: '#FFFFFF' }}>
            This Statement of Work (the "SOW") is part of and incorporated into the Service Agreement (the "Agreement") setting forth the terms and conditions concerning the event production services that ShowPhaze LLC (the "Company") are to provide to CLIENT NAME (the "Client"), collectively the "Parties" and individually a "Party".
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientStatementOfWork;