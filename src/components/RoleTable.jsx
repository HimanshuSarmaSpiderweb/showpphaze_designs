import { Box, Typography, Grid, Tabs, Tab, Stack } from '@mui/material';

const rolesTableHeader = [
  {
    width: 3,
    label: "Role"
  },
  {
    width: 1,
    label: "ABRV"
  },
  {
    width: 5,
    label: "ROLE DESCRIPTION"
  },
  {
    width: 1.5,
    label: "TIER 2"
  },
  {
    width: 1.5,
    label: "TIER 1"
  }
]

const RoleTable = ({
  rolesData = [],
  heading,
  showTableHeader = false
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000000',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
          borderRadius: '1.25rem',
          padding: '0.125rem', // Creates the 2px border effect
        }}
      >
        <Grid
          container
          sx={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
          }}
        >
          {/* Table Header */}
          {showTableHeader ? <Grid
            container
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '1.5rem',
              paddingBottom: "0"
            }}
          >
            {rolesTableHeader?.map?.((role) => {
              return (
                <Grid item xs={role.width}>
                  <Typography variant="h6" sx={{ 
                    fontSize: '1.15rem !important', 
                    textAlign: role.label === "TIER 2" || role.label === "TIER 1" ? "center" : "left", 
                    fontWeight: 'bold' }}>
                    {role.label}
                  </Typography>
                </Grid>
              )
            })}
          </Grid> : null}

          {/* AUDIO Typography with Gradient Background */}
          <Grid
            item
            sx={{
              background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
              padding: '0.5rem 0',
              textAlign: 'center',
              width: "95%",
              margin: "1.5rem auto",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#FFFFFF',
              }}
            >
              {heading}
            </Typography>
          </Grid>

          {/* Dynamic Rows */}
          {rolesData.map((row, index) => (
            <Grid
              container
              key={index}
              sx={{
                padding: '1.25rem 1.5rem',
                borderTop: '0.0625rem solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              <Grid item xs={rolesTableHeader[0].width}>
                <Typography sx={{ fontSize: '1rem' }}>{row.role}</Typography>
              </Grid>
              <Grid item xs={rolesTableHeader[1].width}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.abrv}</Typography>
              </Grid>
              <Grid item xs={rolesTableHeader[2].width}>
                <Typography sx={{ fontSize: '1rem' }}>{row.description}</Typography>
              </Grid>
              <Grid item xs={rolesTableHeader[3].width} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier2}</Typography>
              </Grid>
              <Grid item xs={rolesTableHeader[4].width} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier1}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RoleTable;