import { Box, Typography, Grid, Tabs, Tab, Stack } from '@mui/material';
import React from 'react';
import logoSvg from "../assets/logo.svg";
import Header from '../components/Header';
import ParentComponent from '../components/ParentComponent';
import TabSection from '../components/TabSection';
import DownloadButton from '../components/DownloadButton';
import QRSection from '../components/QrSection';
import RoleTable from '../components/RoleTable';

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

const rolesData = [
  {
    role: 'Audio Systems Engineer',
    abrv: 'ASE',
    description: 'Oversees the installation, configuration, and testing of PA systems, DSPs, and other audio equipment to meet project deadlines and design specifications.',
    tier2: 80,
    tier1: 85,
  },
  {
    role: 'Audio Integration Specialist',
    abrv: 'AIS',
    description: 'Skilled in networked audio (Dante/AES67), rack building, system tuning, and configuring multi-zone audio distribution for permanent installs.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Audio RF Specialist',
    abrv: 'RF',
    description: 'Designs and coordinates wireless microphone and IEM systems for fixed installations, including frequency planning and spectrum analysis in high-traffic RF environments.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Audio Install Technician',
    abrv: 'AT',
    description: 'Performs cable pulls, terminations, speaker mounting, and basic troubleshooting under supervision.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Rack & Wiring Tech - Audio',
    abrv: 'ARF',
    description: 'Specializes in building, wiring, and labeling audio racks to engineered drawings.',
    tier2: 65,
    tier1: 70,
  },
];

const lightingData = [
  {
    role: 'Lighting Systems Engineer',
    abrv: 'LSE',
    description: 'Designs, installs, and commissions architectural and theatrical lighting systems, including control networks (ETC, DMX, ArtNet).',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Lighting Install Technician',
    abrv: 'LIT',
    description: 'Mounts fixtures, runs cable, addresses devices, focuses lighting, and assists with system testing.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Master Electrician - Install',
    abrv: 'ME',
    description: 'Manages electrical distribution and ensures safe power delivery for AV and lighting systems, including breaker tie-ins and load balancing.',
    tier2: 80,
    tier1: 85,
  },
];

const videoData = [
  {
    role: 'Video Systems Engineer',
    abrv: 'VSE',
    description: 'Designs and integrates projection, LED displays, video processing, and routing systems for fixed environments.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'LED Installation Technician',
    abrv: 'LED 2',
    description: 'Assists in the assembly, cabling, and mounting of LED video wall systems.',
    tier2: 55,
    tier1: 60,
  },
  {
    role: 'LED Engineer - Install',
    abrv: 'LED 1',
    description: 'Programs, calibrates, and troubleshoots modular video wall systems during installation.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Projection Install Technician',
    abrv: 'PIT',
    description: 'Mounts, aligns, and networks projectors for multi-screen or blended applications.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Media Server/Control Programmer',
    abrv: 'MS1',
    description: 'Configures and programs advanced media server systems (Watchout, Resolume, Millumin) for permanent installations.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Video Install Technician',
    abrv: 'V2',
    description: 'Runs and terminates video cabling, mounts displays, and assists with system configuration.',
    tier2: 75,
    tier1: 80,
  },
];

const itData = [
  {
    role: 'Network Specialist - AV',
    abrv: 'NETS',
    description: 'Designs, deploys, and maintains AV-over-IP networks, VLANs, and device control systems.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Digital Signage Lead',
    abrv: 'DSL',
    description: 'Oversees the installation and configuration of signage systems, players, and content management solutions.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Control Systems Programmer',
    abrv: 'CSP',
    description: 'Programs Crestron, AMX, or Extron systems for automation, switching, and control in fixed installations.',
    tier2: 80,
    tier1: 'Call For Price',
  },
  {
    role: 'Digital Signage Lead',
    abrv: 'DSL',
    description: 'Oversees setup, troubleshooting, and content management.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Digital Signage Technician',
    abrv: 'DST',
    description: 'Assists lead with setup, troubleshooting, and content management.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Digital Orchestrate Server Op',
    abrv: 'DOS',
    description: 'Manages the server rack, assigning IP addresses to process PowerPoint and content.',
    tier2: 80,
    tier1: 'Call For Price',
  },
  {
    role: 'Network Specialist',
    abrv: 'NetS',
    description: 'Network Specialist tasked with setting, deployment, operation and maintenance of network servers and connected devices.',
    tier2: 80,
    tier1: 'Call For Price',
  },
];

const siteManagementData = [
  {
    role: 'Integration Project Manager',
    abrv: 'IPM',
    description: 'Oversees all phases of an AV installation project, coordinating between design, engineering, and field teams.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Lead Installer',
    abrv: 'LI',
    description: 'Directs on-site crews, ensures work follows drawings/specs, and manages safety compliance.',
    tier2: 80,
    tier1: 85,
  },
  {
    role: 'Field Commissioning Engineer',
    abrv: 'FCE',
    description: 'Performs final system testing, optimization, and client training.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Crew Lead',
    abrv: 'CL',
    description: 'Manages the sign in and out of technicians while reporting to the project lead.',
    tier2: 65,
    tier1: 70,
  },
];

const carpentryData = [
  {
    role: 'Carpentry/Infrastructure Technician',
    abrv: 'CARPT',
    description: 'Builds mounting structures, AV walls, and custom housings per design.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Rigging Specialist - Install',
    abrv: 'RGI',
    description: 'Installs overhead supports for speakers, lighting, and displays in accordance with engineering and safety standards.',
    tier2: 65,
    tier1: 70,
  },
];

const equipmentOperatorsData = [
  {
    role: 'BOOM Op',
    abrv: 'BOOM',
    description: 'Certified Boom or Man lift operator. Takes direction from lead. Manages operating duties in high up and difficult to reach areas with lift equipment.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Forklift Op',
    abrv: 'FORK',
    description: 'Certified Forklift operator. Takes direction from lead. Not tasked with calling load.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'LULL/TELE FORK/Class 7',
    abrv: 'LULL',
    description: 'Certified operator. Tasked with heavy load lifting in a telehandler lift.',
    tier2: 75,
    tier1: 80,
  },
];

const scenicData = [
  {
    role: 'Carp Assist',
    abrv: 'Carp2',
    description: 'Assists a lead carpenter with assembling scenic elements according to plans and direction.',
    tier2: 55,
    tier1: 60,
  },
  {
    role: 'Carp Tech',
    abrv: 'Carp T',
    description: 'Experienced scenic builder with own tools. Skilled in working with various scenic materials and construction methods.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Assistant Lead Carp',
    abrv: 'ALCarp',
    description: 'Manages assigned scenic construction projects independently, coordinating with crew and client. Equipped with own tools.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Lead Carp',
    abrv: 'LCarp',
    description: 'Oversees carpentry crew for scenic construction. Receives diagrams, drawings, or photos at least one week prior to build.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Master Carpenter',
    abrv: 'MCarp',
    description: 'Leads construction of complex scenic builds. Has access to and reviews plans at least two weeks before project start.',
    tier2: 80,
    tier1: '85+',
  },
];

const riggingData = [
  {
    role: 'Climber',
    abrv: 'RG-CL',
    description: 'Rope safety specialist who works with riggers and stage leads to complete elevated tasks not reachable by ladder or lift. SPRAT certification may be required for specific projects.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Motor Tech',
    abrv: 'RG-MT',
    description: 'Calibrates, maintains, and operates hoist systems onsite. CM Hoist certification may be required for certain venues.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Rigger 1 (UP)',
    abrv: 'RG1',
    description: 'Performs rigging duties off the ground. Operates lift equipment and/or works in catwalk systems on exposed structures.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Rigger 2 (DOWN)',
    abrv: 'RG2',
    description: 'Handles safe installation and elevation of AV and scenic equipment on the ground, assisting up riggers with motor point plumbing.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Rigger Specialist (LEAD)',
    abrv: 'RGS',
    description: 'Experienced in load calculations and setting rigging points in arenas or other venues. Oversees safety and execution in accordance with plans. ETCP or comparable certification may be required.',
    tier2: 'Call For Price',
    tier1: 'Call For Price',
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
//             fontSize: '1rem',
//           }}
//         >
//           SHOWPHAZE RESERVES THE RIGHT TO ALTER RATES BASED ON VARIOUS FACTORS. REQUESTS MADE WITHIN 2 WEEKS OF EVENT MAY REQUIRE A PREMIUM RATE.
//         </Typography>
//         <Typography
//           sx={{
//             color: '#FFFFFF',
//             fontSize: '1rem',
//           }}
//         >
//           <span style={{ fontSize: '1rem' }}>★</span>PREMIUM CITIES: BOSTON, CHICAGO, DENVER, MIAMI, SEATTLE, NEW YORK, WASHINGTON DC AND THE STATE OF CALIFORNIA.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// const RoleTable = ({
//   rolesData = [],
//   heading,
//   showTableHeader = false
// }) => {
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         backgroundColor: '#000000',
//         color: '#FFFFFF',
//       }}
//     >
//       <Box
//         sx={{
//           background: 'linear-gradient(to top right, #c47ab2, #00BFFF)',
//           borderRadius: '1.25rem',
//           padding: '0.125rem', // Creates the 2px border effect
//         }}
//       >
//         <Grid
//           container
//           sx={{
//             borderRadius: '1.25rem',
//             overflow: 'hidden',
//             backgroundColor: '#000000',
//           }}
//         >
//           {/* Table Header */}
//           {showTableHeader ? <Grid
//             container
//             sx={{
//               backgroundColor: 'rgba(0, 0, 0, 0.7)',
//               padding: '1.5rem',
//               paddingBottom: "0"
//             }}
//           >
//             {rolesTableHeader?.map?.((role) => {
//               return (
//                 <Grid item xs={role.width}>
//                   <Typography variant="h6" sx={{ fontSize: '1.15rem !important', fontWeight: 'bold' }}>
//                     {role.label}
//                   </Typography>
//                 </Grid>
//               )
//             })}
//           </Grid> : null}

//           {/* AUDIO Typography with Gradient Background */}
//           <Grid
//             item
//             sx={{
//               background: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 100%)',
//               padding: '0.5rem 0',
//               textAlign: 'center',
//               width: "95%",
//               margin: "1.5rem auto",
//             }}
//           >
//             <Typography
//               variant="h4"
//               sx={{
//                 fontSize: '1.5rem',
//                 fontWeight: 'bold',
//                 color: '#FFFFFF',
//               }}
//             >
//               {heading}
//             </Typography>
//           </Grid>

//           {/* Dynamic Rows */}
//           {rolesData.map((row, index) => (
//             <Grid
//               container
//               key={index}
//               sx={{
//                 padding: '1.25rem 1.5rem',
//                 borderTop: '0.0625rem solid rgba(255, 255, 255, 0.1)',
//                 '&:hover': {
//                   backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                 },
//               }}
//             >
//               <Grid item xs={rolesTableHeader[0].width}>
//                 <Typography sx={{ fontSize: '1rem' }}>{row.role}</Typography>
//               </Grid>
//               <Grid item xs={rolesTableHeader[1].width}>
//                 <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.abrv}</Typography>
//               </Grid>
//               <Grid item xs={rolesTableHeader[2].width}>
//                 <Typography sx={{ fontSize: '1rem' }}>{row.description}</Typography>
//               </Grid>
//               <Grid item xs={rolesTableHeader[3].width} sx={{ textAlign: 'center' }}>
//                 <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier2}</Typography>
//               </Grid>
//               <Grid item xs={rolesTableHeader[4].width} sx={{ textAlign: 'center' }}>
//                 <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{row.tier1}</Typography>
//               </Grid>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

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


const IntegrationRateSheet = () => {
  return (
    <>
      <Box
        sx={{
          padding: '0',
          marginBottom: "1.5rem",
          textAlign: 'left',
        }}
      >
        <Typography
          sx={{
            color: '#FFFFFF',
            fontSize: '1.15rem',
            fontWeight: "700",
          }}
        >
          ShowPhaze reserves the right to alter rates based on various factors. Requests made within 2 weeks of event may require a premium rate.
          <br />
          *Premium cities:  Boston, Chicago, Denver, Miami, Seattle, New York, Washington DC and the state of California.
        </Typography>
      </Box>

      <RoleTable
        rolesData={rolesData}
        heading={"Audio"}
        showTableHeader={true}
      />

      <RoleTable
        rolesData={lightingData}
        heading={"Lighting"}
      />

      <RoleTable
        rolesData={videoData}
        heading={"Video"}
      />

      <RoleTable
        rolesData={itData}
        heading={"I/T"}
      />

      <RoleTable
        rolesData={siteManagementData}
        heading={"Project & Site Management"}
      />

      <RoleTable
        rolesData={carpentryData}
        heading={"Carpentry & Rigging"}
      />

      <RoleTable
        rolesData={equipmentOperatorsData}
        heading={"Equipment Operators"}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "2rem"
        }}
      >
        <DownloadButton 
          name={"Integration Rate Sheet.pdf"}
          url={"https://showphaze-dev.s3.ca-central-1.amazonaws.com/Rate-Sheet/integration+rate+sheet_forPrint.pdf"}
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
      {/* <DownloadButton /> */}
    </>
  )
};

export default IntegrationRateSheet;