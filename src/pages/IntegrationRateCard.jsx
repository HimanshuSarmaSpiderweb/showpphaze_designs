import { Box, Typography, Grid, Tabs, Tab, Stack, List, ListItem, ListItemIcon, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Using a checkmark icon as a bullet
import React from 'react';
import fuseLogo from "../assets/logos/fuse.svg";
import on_servicesLogo from "../assets/logos/on_services.svg";
import prgLogo from "../assets/logos/prg.svg";
import creativeLogo from "../assets/logos/creative.svg";
import freemanLogo from "../assets/logos/freeman.svg";
import alfordLogo from "../assets/logos/alford.svg";
import imsLogo from "../assets/logos/ims.svg";
import markeysLogo from "../assets/logos/markeys.svg";
import designoneLogo from "../assets/logos/designone.svg";
import wall4 from "../assets/logos/4wall.svg";
import qrImg from "../assets/qr.svg";
import Header from '../components/Header';
import DownloadButton from '../components/DownloadButton';
import ParentComponent from '../components/ParentComponent';
import TabSection from '../components/TabSection';
import QRSection from '../components/QrSection';

const rolesData = [
  {
    role: 'Assisted Listening Tech',
    abrv: 'ASLT',
    description: 'Specialist in wireless headset systems for attendees (e.g., silent conference or translation systems). Responsible for distribution, setup, troubleshooting, and retrieval.',
    tier2: 80,
    tier1: 85,
  },
  {
    role: 'Audio Engineer 1',
    abrv: 'AE1',
    description: 'Senior audio engineer for high-complexity general sessions. Come proficient, skilled in array design and advanced consoles. Capable of FOH and monitor mixes simultaneously, plus managing multiple output mixes (in-room, stream, record, overflow).',
    tier2: 80,
    tier1: 85,
  },
  {
    role: 'Audio RF Coordinator',
    abrv: 'RF',
    description: 'Wireless frequency management in high-traffic environments. Monitors spectrum, coordinates channels, and ensures interference-free operation.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Audio Comms Technician',
    abrv: 'COMM',
    description: 'Dedicated comms system tech experienced with Clear-Com, Telex, and IP-based systems. Manages wired/wireless comms integration for production crews.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Audio Systems Engineer',
    abrv: 'ASE',
    description: 'Responsible for overall PA system functionality, tuning, and technical delivery to meet show specs and deadlines.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Audio PA/Stage Tech',
    abrv: 'AST',
    description: 'Handles hanging, cabling, and patching PA systems. Works closely with engineers for system setup.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Audio Operator',
    abrv: 'A1',
    description: 'Intermediate-complexity GS audio operator. Proficient with QL-5, X32, M32 or similar consoles. Can focus basic arrays in addition to ground-stacked systems.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Audio Tech 2 (Show)',
    abrv: 'A2',
    description: 'Manages mics, basic Wireless Workbench usage, and on-site troubleshooting for moderate complexity setups.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Audio Tech Set/Strike',
    abrv: 'AT',
    description: 'Executes assigned audio setup/strike tasks independently.',
    tier2: 55,
    tier1: 60,
  },
  {
    role: 'Audio Utility',
    abrv: 'A3',
    description: 'Entry-level audio crew member. Assists with cable runs, mic placement, and basic setup/strike.',
    tier2: 55,
    tier1: 60,
  },
];

// const DownloadButton = () => {
//   return (
//     <Box
//       sx={{
//         background: 'linear-gradient(to top, #bd77b1, #1c527a, #1fa1c6)',
//         padding: '0.25rem 4rem',
//         display: 'inline-flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         cursor: 'pointer',
//       }}
//     >
//       <Typography
//         variant="button"
//         sx={{
//           color: '#FFFFFF',
//           fontSize: '1.5rem',
//           fontWeight: 'bold',
//           letterSpacing: '0.1rem',
//           textTransform: 'none',
//         }}
//       >
//         Download PDF
//       </Typography>
//     </Box>
//   );
// };


// Custom component to simulate a gradient underline for the active tab
const GradientTab = (props) => (
  <Tab
    {...props}
    sx={{
      color: '#FFFFFF',
      fontSize: '1rem',
      fontWeight: 'bold',
      padding: '0 2rem',
      textTransform: 'none',
      '&.Mui-selected': {
        color: '#FFFFFF',
      },
      '&.Mui-selected .MuiTabs-indicator': {
        background: 'linear-gradient(90deg, #c47ab2 0%, #00BFFF 100%)',
        height: '0.25rem',
      },
      // You can also add styles for the underline here if you want it to be part of the tab itself, but overriding the indicator is the recommended way.
    }}
  />
);

// const TabSection = () => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         background: "transparent", // A dark color to match the image background
//         padding: '2rem 0',
//       }}
//     >
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         aria-label="live event tabs"
//         TabIndicatorProps={{
//           sx: {
//             background: 'linear-gradient(90deg, #c47ab2 0%, #00BFFF 100%)',
//             height: '0.25rem',
//           },
//         }}
//         sx={{
//           '& .MuiTabs-flexContainer': {
//             padding: "0 1rem",
//             justifyContent: 'space-between',
//           },
//         }}
//       >
//         <Tab
//           label="Live Event Rate Card"
//           sx={{
//             color: 'rgba(255, 255, 255, 0.5)',
//             fontSize: '1.15rem',
//             fontWeight: 'bold',
//             padding: '0 2rem',
//             textTransform: 'none',
//             '&.Mui-selected': {
//               color: '#FFFFFF',
//             },
//           }}
//         />
//         <Tab
//           label="Live Event Rate Sheet"
//           sx={{
//             color: 'rgba(255, 255, 255, 0.5)',
//             fontSize: '1.15rem',
//             fontWeight: 'bold',
//             padding: '0 2rem',
//             textTransform: 'none',
//             '&.Mui-selected': {
//               color: '#FFFFFF',
//             },
//           }}
//         />
//         <Tab
//           label="Live Event Service Agreement"
//           sx={{
//             color: 'rgba(255, 255, 255, 0.5)',
//             fontSize: '1.15rem',
//             fontWeight: 'bold',
//             padding: '0 2rem',
//             textTransform: 'none',
//             '&.Mui-selected': {
//               color: '#FFFFFF',
//             },
//           }}
//         />
//       </Tabs>
//       <Box
//         sx={{
//           padding: '2rem 0 0 0',
//           textAlign: 'left',
//         }}
//       >
//         <Typography
//           sx={{
//             color: '#FFFFFF',
//             fontSize: '1.15rem',
//             fontWeight: "700",
//           }}
//         >
//           PRODUCTION LABOR & AV CREWING SERVICES
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

const RoleTable = ({
  header = []
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
          <Grid
            container
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '1.5rem',
            }}
          >
            {/* {header?.map?.((headerItem, headerItemIdx) => {
              return (
                <Grid item xs={headerItem?.width}>
                  <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                    {headerItem?.label}
                  </Typography>
                </Grid>
              )
            })} */}
            <Grid item xs={3}>
              <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>ROLE</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>ABRV</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>ROLE DESCRIPTION</Typography>
            </Grid>
            <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>TIER 2</Typography>
            </Grid>
            <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>TIER 1</Typography>
            </Grid>
          </Grid>

          {/* AUDIO Typography with Gradient Background */}
          <Grid
            item
            sx={{
              background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
              padding: '0.5rem 0',
              textAlign: 'center',
              width: "95%",
              margin: "0 auto",
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
              AUDIO
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
              <Grid item xs={3}>
                <Typography sx={{ fontSize: '1rem' }}>{row.role}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.abrv}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={{ fontSize: '1rem' }}>{row.description}</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier2}</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier1}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const LightingRoleTable = ({
  header = []
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
            paddingTop: "1.5rem",
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
          }}
        >
          {/* AUDIO Typography with Gradient Background */}
          <Grid
            item
            sx={{
              background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
              padding: '0.5rem 0',
              textAlign: 'center',
              width: "95%",
              margin: "0 auto",
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
              LIGHTING
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
              <Grid item xs={3}>
                <Typography sx={{ fontSize: '1rem' }}>{row.role}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.abrv}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={{ fontSize: '1rem' }}>{row.description}</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier2}</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier1}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const VideoRoleTable = ({
  header = []
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
            paddingTop: "1.5rem",
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
          }}
        >
          {/* AUDIO Typography with Gradient Background */}
          <Grid
            item
            sx={{
              background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
              padding: '0.5rem 0',
              textAlign: 'center',
              width: "95%",
              margin: "0 auto",
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
              VIDEO
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
              <Grid item xs={3}>
                <Typography sx={{ fontSize: '1rem' }}>{row.role}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.abrv}</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={{ fontSize: '1rem' }}>{row.description}</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier2}</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier1}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};


const textData = [
  'United States - Canada - Mexico',
  'These documents are designed to provide a general overview for shows requested 14 days or more from request date',
  'Rates may vary based various factors',
  'Estimates will outline actual costs',
  'Stay turned for the Showphaze App',
  'Please submit preferred CSV format for requesting crews',
];

const bulletPoints = [
  'Time and a half is applied after 10 hours',
  'Double Time rates apply after 12 hours',
  'Time and a half is applied after midnight until 6:00 AM',
  'A 30 min meal or 1hr walk-away break is required every 5 hrs',
  '15 min breaks required every 2.5 hrs',
  '$50 Crew Lead charge applied to calls over 8 personnel',
  'Cancellation fees:',
  '★ Lead Operator Positions - 14 Days - 50% charge 72 hrs - 100% charge',
  '★ Assist Positions - 72hrs - 50% charge 24hrs - 100% charge',
  '★ 50% deposit is required to secure services',
  '★ For shows in California please request 8hr work day terms',
];

const ServicingNorthAmerica = () => {
  return (
    <Box
      sx={{
        width: '50%',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
          borderRadius: '1.25rem',
          padding: '0.125rem',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#000000',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {/* Header */}
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}
          >
            SERVICING ALL OF NORTH AMERICA
          </Typography>

          {/* Text Content */}
          <Typography sx={{ fontSize: '1rem', color: '#FFFFFF' }}>
            United States - Canada
          </Typography>
          <Typography sx={{ fontSize: '1rem', color: '#FFFFFF' }}>
            These documents are designed to provide a general overview for shows requested 14 days or more from request date
          </Typography>
          <Typography sx={{ fontSize: '1rem', color: '#FFFFFF' }}>
            Estimates will outline actual costs
            <br />
            50% deposit is required to secure services
          </Typography>
          <Typography sx={{ fontSize: '1rem', color: '#FFFFFF' }}>
            *Tier 1 Cities: Boston, Chicago, Indianapolis, Miami, Seattle, New York, Washington DC and the state of California
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const tableData = [
  {
    position: 'Cable Pulling',
    tier2: { full: '$45', half: '$48' },
    tier1: { full: '$50', half: '$53' },
  },
  {
    position: 'Carpenter Assist',
    tier2: { full: '$50', half: '$53' },
    tier1: { full: '$55', half: '$58' },
  },
  {
    position: 'AV Technician (Basic)',
    tier2: { full: '$55', half: '$58' },
    tier1: { full: '$60', half: '$63' },
  },
  {
    position: 'AV Technician (Skilled)',
    tier2: { full: '$60', half: '$63' },
    tier1: { full: '$65', half: '$58' },
  },
  {
    position: 'Maintenance Technician',
    tier2: { full: '$65', half: '$55' },
    tier1: { full: '$70', half: '$75' },
  },
  {
    position: 'Lead Carpenter',
    tier2: { full: '$750', half: 'N/A' },
    tier1: { full: '$800', half: 'N/A' },
  },
  {
    position: 'Lead Install Technician',
    tier2: { full: '$800', half: 'N/A' },
    tier1: { full: '$900', half: 'N/A' },
  },
  {
    position: 'Emergency Support',
    tier2: { full: '$800', half: 'N/A' },
    tier1: { full: '$950', half: 'N/A' },
  },
];

// Content for the list to be displayed next to Tier 1
const tier1ListItems = [
  "Fully supervised. Only pulling cable without terminating",
  "Able to assist a lead carpenter with basic tasks",
  "Capable of doing simple cat6 terminations and other AV tasks",
  "Able to follow more complex instructions and troubleshoot",
  "Can fix minor software and basic cabling issues",
  "Has a full set of tools and able to handle most complex projects",
  "Works with client team to undertake complex tasks and lead crews",
  "Skilled technician versed at troubleshooting independently"
];

const RatesTable = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "stretch",
          background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
          borderRadius: '1.25rem',
          padding: '0.125rem', // Creates the 2px border effect
        }}
      >
        <Box
          sx={{
            display: "flex", // Makes this a flex container
            alignItems: "center", // Vertically centers content
            gap: "2rem",
            borderRadius: '1.25rem',
            overflow: 'hidden',
            backgroundColor: '#000000',
            padding: '2rem',
          }}
        >
          {/* Table Container */}
          <Grid container sx={{ flexGrow: 1 }}>
            {/* Main Headers */}
            <Grid container sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>POSITIONS</Typography>
              </Grid>
              <Grid item xs={3} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>TIER 2</Typography>
              </Grid>
              <Grid item xs={3} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>TIER 1</Typography>
              </Grid>
            </Grid>

            {/* Sub-Headers */}
            <Grid container
              sx={{
                marginTop: "1.5rem",
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <Grid item xs={6}>
                {/* Empty cell for "Positions" */}
              </Grid>
              <Grid item xs={1.5} sx={{
                textAlign: 'center', borderRight: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <Typography variant="h6" sx={{ fontSize: '0.7rem' }}>FULL</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontSize: '0.7rem' }}>HALF</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'center', borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <Typography variant="h6" sx={{ fontSize: '0.7rem' }}>FULL</Typography>
              </Grid>
              <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontSize: '0.7rem' }}>HALF</Typography>
              </Grid>
            </Grid>
            <Box sx={{ height: '1px', background: 'linear-gradient(90deg, #c47ab2 0%, #00BFFF 100%)', width: '100%' }} />

            {/* Dynamic Rows */}
            {tableData.map((row, index) => (
              <Grid
                container
                key={index}
                sx={{
                  padding: '1rem 0',
                  borderTop: '0.0625rem solid rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: '1rem' }}>{row.position}</Typography>
                </Grid>
                <Grid item xs={1.5} sx={{ textAlign: 'center', borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <Typography sx={{ fontSize: '1rem' }}>{row.tier2.full}</Typography>
                </Grid>
                <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '1rem' }}>{row.tier2.half}</Typography>
                </Grid>
                <Grid item xs={1.5} sx={{ textAlign: 'center', borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <Typography sx={{ fontSize: '1rem' }}>{row.tier1.full}</Typography>
                </Grid>
                <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '1rem' }}>{row.tier1.half}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>

          {/* Unordered List Container */}
          <Box
            sx={{
              maxWidth: "400px",
              paddingLeft: '2rem',
            }}
          >
            <List sx={{ color: '#fff' }}>
              {tier1ListItems.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      marginTop: '0.6rem', // Aligns the dot with the text
                      marginRight: '0.5rem',
                      flexShrink: 0, // Prevents the dot from shrinking
                    }}
                  />
                  <Typography sx={{ fontSize: '0.9rem', color: '#fff', padding: '0.2rem 0' }}>
                    {item}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


const PositionsTable = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
      }}
    >
      {/* Left Container: Servicing North America */}
      <RatesTable />
    </Box>
  );
};

const PartnerLogos = () => {
  const items = [
    { src: fuseLogo },
    { src: on_servicesLogo },
    { src: prgLogo },
    { src: creativeLogo },
    { src: freemanLogo },
    { src: alfordLogo },
    { src: imsLogo },
    { src: markeysLogo },
    { src: designoneLogo },
    { src: wall4 },
  ];

  return (
    <Box
      sx={{
        maxWidth: "800px",
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px', // Adds space between items
        padding: '16px',
      }}
    >
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            padding: '16px 16px 8px 16px',
            backgroundColor: '#f0f0f0',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center',
            minWidth: '100px', // Ensures a minimum size for each item
          }}
        >
          <img 
            src={item.src}
          />
        </Box>
      ))}
    </Box>
  );
};

// const QRSection = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column"
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: "0.75rem",
//           textAlign: "center"
//         }}
//       >
//         Showphaze App
//       </Typography>

//       <img 
//         src={qrImg}
//       />
//     </Box>
//   )
// }

const IntegrationRateCard = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          alignSelf: "flex-start"
        }}
      >
        <Typography
          sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
        >
          PRODUCTION LABOR & AV CREWING SERVICES
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          alignSelf: "flex-start"
        }}
      >
        <ServicingNorthAmerica />
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <PositionsTable />
      </Box>

      <Box
        sx={{
          marginTop: "1.25rem",
          width: "100%",
          alignSelf: "flex-start"
        }}
      >
        <Typography
          sx={{
            width: "100%",
            textWrap: "wrap",
            fontSize: '1.15rem',
            fontWeight: '500',
            color: '#FFFFFF',
          }}
        >
          {`*California requests are subject to a 5-10% increase. Please request an estimate.`.toUpperCase()}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "2rem"
        }}
      >
        <DownloadButton 
          name={"Integration Rate Card.pdf"}
          url={"https://showphaze-dev.s3.ca-central-1.amazonaws.com/Rate-Sheet/Integration+Rate+Card.pdf"}
        />
      </Box>

      <Box
        sx={{
          marginBottom: "6rem",
        }}
      >

      </Box>

      <Box
        sx={{
          position: "absolute",
          right: "2rem",
          bottom: "2rem"
        }}
      >
        <QRSection />
      </Box>
    </>
  )
};

export default IntegrationRateCard;