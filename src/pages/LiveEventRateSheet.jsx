import { Box, Typography, Grid, Tabs, Tab, Stack } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import ParentComponent from '../components/ParentComponent';
import TabSection from '../components/TabSection';
import DownloadButton from '../components/DownloadButton';
import QRSection from '../components/QrSection';
import RoleTable from '../components/RoleTable';

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

const lightingData = [
  {
    role: 'Lighting Director (GS)',
    abrv: 'LD1',
    description: 'Creative lead for general sessions. Programs and operates show lighting. Coordinates with show management to fulfill all lighting requirements.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Lighting Area Lead',
    abrv: 'LAL',
    description: 'Oversees lighting in meeting room environments. Manages lighting crew, ensures stage wash, accent lighting, and basic programming needs are met.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Lighting Tech 1 (programmer)',
    abrv: 'L1',
    description: 'Proficient with professional lighting consoles (GrandMA, Avolites, Hog, Chamsys, ETC). Handles patching, programming, and show operation.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Advanced Lighting Specialist',
    abrv: 'LS',
    description: 'Advanced lighting specialist for complex setups, such as multi-universe control, media server integration, and broadcast/touring rigs.',
    tier2: 80,
    tier1: 85,
  },
  {
    role: 'Master Electrician 1',
    abrv: 'ME',
    description: 'Manages power distribution and communication for lighting and AV systems.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Master Electrician 2',
    abrv: 'ME-L2',
    description: 'Supports LD and ME with fixture focusing, addressing, and team management.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Production Electrician',
    abrv: 'PLE',
    description: 'Experienced electrician capable of independent work on lighting installations and cabling.',
    tier2: 60,
    tier1: 65, // The screenshot shows 60 and 650, which is likely a typo. I'll use 65 for tier 1 to maintain consistency with the other values.
  },
  {
    role: 'Spot Light Operator',
    abrv: 'SPOT',
    description: 'Trained in safe operation and accurate cueing of followspots for live events.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Lighting Tech 2/Electrician (Assist)',
    abrv: 'L2',
    description: 'Assists with cabling, DMX addressing, fixture focusing, and wireless DMX systems. Experienced with lift operation.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Lighting Utility',
    abrv: 'L3',
    description: 'Entry-level crew member. Hangs fixtures, runs DMX cables, and assists with setup/strike under supervision.',
    tier2: 55,
    tier1: 60,
  },
];

const videoData = [
  {
    role: 'Camera Op',
    abrv: 'CAM1',
    description: 'Sets up, strikes, and operates professional studio or broadcast long-lens cameras during live events.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Cable Page',
    abrv: 'CP',
    description: 'Assists camera operators by managing cable runs, setup, and strike.',
    tier2: 55,
    tier1: 60,
  },
  {
    role: 'Camera PTZ 1',
    abrv: 'PTZ1',
    description: 'Specialist in setting up and operating 6-10 PTZ cameras for complex events.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Camera PTZ 2',
    abrv: 'PTZ 2',
    description: 'Operates 1-2 PTZ cameras for smaller-scale productions.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Camera Shader',
    abrv: 'CS',
    description: 'Ensures multiple cameras match in color, brightness, and contrast for consistent visual output.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Graphic 1',
    abrv: 'GFX 1',
    description: 'Operates three or more graphics machines during live events.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Graphic 2',
    abrv: 'GFX 2',
    description: 'Operates one to two graphics machines for smaller events or breakout sessions.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Hybrid Stream Operator',
    abrv: 'HY-OP',
    description: 'Operates and manages multi-stream software (vMix, OBS, etc.) in coordination with supporting AV hardware.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Lead Engineer',
    abrv: 'EIC',
    description: 'Designs and implements video systems for complex productions. Oversees video crew and recommends equipment and workflow solutions.',
    tier2: 80,
    tier1: 85,
  },
  {
    role: 'LED Tech',
    abrv: 'LED2',
    description: 'Assists in building and cabling LED wall systems under direction of a lead engineer.',
    tier2: 55,
    tier1: 60,
  },
  {
    role: 'LED Engineer Specialist',
    abrv: 'LEDS',
    description: 'Programs and manages complex LED wall systems. Handles troubleshooting, calibration, and advanced setup.',
    tier2: 'Call For Price',
    tier1: 'Call For Price',
  },
  {
    role: 'LED Engineer',
    abrv: 'LED1',
    description: 'Programs, calibrates, and troubleshoots modular LED wall systems. May also handle wall construction and onsite repairs.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Media Server Op 1',
    abrv: 'MSO1',
    description: 'Operates advanced media server platforms (D3, Notch, Unreal, Watchout).',
    tier2: 'Call For Price',
    tier1: 'Call For Price',
  },
  {
    role: 'Media Server Op 2',
    abrv: 'MSO2',
    description: 'Operates basic media server setups (Millumin, Resolume, Watchout, Mitti).',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Play Back Pro',
    abrv: 'PBP',
    description: 'Runs PlaybackPro, Mitti, or similar software for media playback during shows.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Presentation',
    abrv: 'PRES',
    description: 'Assists clients in designing and building presentations for general sessions or complex show environments.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Projection Specialist',
    abrv: 'PJS',
    description: 'Expert in projection blending, multi-screen setups, color balancing, and advanced projection mapping.',
    tier2: 80,
    tier1: 85,
  },
  {
    role: 'Projectionist',
    abrv: 'PJ',
    description: 'Handles projection setup, hanging, focusing, and networking for small to mid-size sessions (non-blended).',
    tier2: 75,
    tier1: 85,
  },
  {
    role: 'Record Op',
    abrv: 'REC',
    description: 'Operates recording software/hardware (OBS, NewTek IsoCorder Pro, AJA Ki Pro, BMD HyperDeck).',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Record Op Specialist',
    abrv: 'RECS',
    description: 'Manages complex multi-stream recording systems for high-profile events.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Tape Op 1',
    abrv: 'TO',
    description: 'Operates VT/tape systems, ensures recorded content meets technical specifications.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Technical Director/Camera',
    abrv: 'TD',
    description: 'Switches and directs multi-camera setups (3-4 cameras) for medium to large general sessions.',
    tier2: '75+',
    tier1: '80+',
  },
  {
    role: 'Technical Director Specialist',
    abrv: 'TDS',
    description: 'Directs 5-8 cameras and coordinates multiple production elements (lighting, audio, stage cues). Advises on schedules and rundowns.',
    tier2: 'Call For Price',
    tier1: 'Call For Price',
  },
  {
    role: 'Teleprompter',
    abrv: 'TELP',
    description: 'Operates teleprompter systems and edits scripts for live events.',
    tier2: 'Call For Price',
    tier1: 'Call For Price',
  },
  {
    role: 'Video Screen Manager',
    abrv: 'VSM',
    description: 'Manages screen systems (E2, Spyder X80, Ascender, Carbonite) with multiple destinations.',
    tier2: '75-80',
    tier1: '80-85',
  },
  {
    role: 'Video Lead 1',
    abrv: 'V1',
    description: 'Switch operator capable of setting up advanced camera and video systems.',
    tier2: '75+',
    tier1: '80+',
  },
  {
    role: 'Video Tech 2',
    abrv: 'V2',
    description: 'Works independently on assigned video-related tasks, including equipment setup and troubleshooting.',
    tier2: 55,
    tier1: 60,
  },
  {
    role: 'Video Utility (Assist)',
    abrv: 'V3',
    description: 'Entry-level video crew. Assists with cable runs, assembling video systems, and setup/strike.',
    tier2: 55,
    tier1: 60,
  },
  {
    role: 'V-Mix Op',
    abrv: 'VMX',
    description: 'Runs vMix setups for live streaming or hybrid events.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'ZOOM Operator',
    abrv: 'Zoom 1',
    description: 'Operator tasked in operating and managing Zoom Attendees while on location.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Zoom/Stream Operator',
    abrv: 'SO',
    description: 'Coordinates hybrid/live presenters and audiences, ensuring smooth streaming experience.',
    tier2: 70,
    tier1: 75,
  },
];

const itData = [
  {
    role: 'Audience Response System Tech',
    abrv: 'ARS',
    description: 'Operates audience engagement systems, presents questions, records responses, and provides feedback to attendees.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Computer Tech',
    abrv: 'COMP',
    description: 'Experienced in diagnosing and resolving common IT issues. Supports hardware/software troubleshooting for event-related needs.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Digital IT Tech',
    abrv: 'DIT',
    description: 'Assists with laptop inventory, software installation, and basic networking setup for events.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Digital Project Manager',
    abrv: 'DPM',
    description: 'Oversees all IT-related elements for an event, including planning, setup, support, and post-event reporting.',
    tier2: 'Call For Price',
    tier1: 'Call For Price',
  },
  {
    role: 'Digital Signage Lead',
    abrv: 'DSL',
    description: 'Leads installation, troubleshooting, and content management for event digital signage systems.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Digital Signage Technician',
    abrv: 'DST',
    description: 'Supports lead technician with digital signage setup, troubleshooting, and updates.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Digital Orchestrated Server Op',
    abrv: 'DOS',
    description: 'Manages server racks, assigns IP addresses, and processes content for presentation and playback systems.',
    tier2: 'Call For Price',
    tier1: 'Call For Price',
  },
  {
    role: 'Network Specialist',
    abrv: 'Nets',
    description: 'Designs, deploys, and maintains event network infrastructure, servers, and connected devices.',
    tier2: 'Call For Price',
    tier1: 'Call For Price',
  },
  {
    role: 'Speaker Ready Room Lead',
    abrv: 'SRRL',
    description: 'Manages all speaker ready room operations, ensuring equipment is functional and presentations are properly handled.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Speaker Ready Room OP',
    abrv: 'SRROP',
    description: 'Operates server systems in the speaker ready room, ensuring presentations are stored, managed, and delivered correctly.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Speaker Ready Room Tech',
    abrv: 'SRRT',
    description: 'Assists presenters with loading and finalizing their presentations for server storage and delivery.',
    tier2: 65,
    tier1: 70,
  },
];

const showManagementData = [
  {
    role: 'A/V LEAD',
    abrv: 'AVL',
    description: 'Leads a crew of up to 15 technicians, coordinating technical departments to ensure smooth operations. 16+ requires a Steward.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Producer/Show Caller/TD',
    abrv: 'PROD',
    description: 'Directs and calls the run of show. Manages cue sequences for all production elements including audio, video, lighting, and stage management.',
    tier2: '75-80',
    tier1: '80-85',
  },
  {
    role: 'Project Manager',
    abrv: 'PM',
    description: 'Oversees the delivery of specific event projects on behalf of the client. Manages schedules, resources, and crew to meet deadlines and expectations.',
    tier2: 80,
    tier1: 85,
  },
  {
    role: 'Steward',
    abrv: 'STEW',
    description: 'Leads and manages crews of 16 or more. Works on behalf of ShowPhaze, coordinating between crew and client to ensure execution meets agreed plans.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Stage Manager',
    abrv: 'SM',
    description: 'Advanced-level stage manager for live broadcast events. Coordinates stage movements, talent, and technical cues.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Stage Manager Specialist',
    abrv: 'SMS',
    description: 'Expert-level stage manager with high-profile experience (e.g., award shows, televised events). Oversees complex cueing and talent management.',
    tier2: 'Call For Price',
    tier1: 'Call For Price',
  },
];

const meetingRoomsData = [
  {
    role: 'Multi-Source Area Lead',
    abrv: 'MSL',
    description: 'Leads setup and operation of meeting room AV systems. Strong troubleshooting skills for both audio and video; manages crew for setup and strike.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Area Lead (Audio)',
    abrv: 'AAL',
    description: 'Oversees meeting room audio setup and operation. Leads crew, troubleshoots, and ensures high-quality sound.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Area Lead (Video)',
    abrv: 'VAL',
    description: 'Oversees meeting room video setup and operation. Leads crew and resolves technical issues quickly.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Area Lead (Lighting)',
    abrv: 'LAL',
    description: 'Oversees meeting room lighting setup and operation. Leads crew, troubleshoots lighting systems, and ensures stage wash and effects meet requirements.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Meeting Room Coordinator',
    abrv: 'MR-C',
    description: 'Coordinates meeting room equipment allocation, scheduling, and crew assignments.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Assist MR Coordinator',
    abrv: 'A-MR-C',
    description: 'Supports the Meeting Room Coordinator in managing gear and crew logistics.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Advanced Meeting Room Op',
    abrv: 'A-MROP',
    description: 'Operates advanced AV setups including digital consoles, switchers, and multi-source systems.',
    tier2: '70-75',
    tier1: '75-80',
  },
  {
    role: 'Meeting Room Operator',
    abrv: 'MROP',
    description: 'Operates basic AV equipment such as analog consoles, laptops, and simple switchers.',
    tier2: '65-70',
    tier1: '70-75',
  },
  {
    role: 'Floater and Steward (15+Call)',
    abrv: 'FLT-ST',
    description: 'Manages a large team of operators/floaters (15+). Troubleshoots AV/IT issues and coordinates workflow.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Floater and Crew Lead (8+Call)',
    abrv: 'FLT-CL',
    description: 'Oversees smaller floater/operator teams (8+). Provides assistance and ensures tasks are completed.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Meeting Room Floater',
    abrv: 'MRF',
    description: 'Supports multiple rooms with light AV/IT needs. Responds to on-call requests from operators or leads.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'MR Tech + Crew Chief (10+Call)',
    abrv: 'CW-CH',
    description: 'Works as a lead technician while managing up to 10 crew members. Coordinates breaks, sign-ins, and schedules.',
    tier2: 70,
    tier1: 75,
  },
  {
    role: 'Meeting Room Tech (Set/Strike)',
    abrv: 'MRT',
    description: 'Handles low to mid-complexity meeting room setups (projector focus, mic syncing, basic console use).',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Audio/Video/Lighting Tech',
    abrv: 'AV3L3',
    description: 'Entry-level technicians assisting with respective department setups and strikes in meeting rooms.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'General AV Utility',
    abrv: 'GAV',
    description: 'Sets up and strikes basic AV gear such as screens, projectors, lighting trees, and analog audio.',
    tier2: 55,
    tier1: 60,
  },
];

const exhibitsData = [
  {
    role: 'Assistant Exhibit Floor Coordinator',
    abrv: 'AEFT',
    description: 'Supports the Exhibit Floor Coordinator in managing crews, inventory, and logistics for exhibit booths.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Exhibit Floor Coordinator',
    abrv: 'EFC',
    description: 'Oversees crew and inventory for multiple exhibit booths. Coordinates with clients and leads on scheduling, setup, and tear down.',
    tier2: 75,
    tier1: 80,
  },
  {
    role: 'Exhibit Tech',
    abrv: 'EXT',
    description: 'Assists with exhibit booth setup, including mounting displays, building video walls, and running AC power from preset distribution.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Stagehand',
    abrv: 'SH',
    description: 'Performs basic scenic construction, pipe and drape setup, carpet laying, and stage deck assembly. Assists with prop and furniture placement.',
    tier2: 55,
    tier1: 60,
  },
  {
    role: 'Stagehand (Show)',
    abrv: 'SHS',
    description: 'Client-facing stagehand for live event environments. Follows stage plots, handles scenic moves, and works in show blacks when required.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'Truck Loader / (TL Assist)',
    abrv: 'TL',
    description: 'Assists with loading and unloading trucks, moving cases and equipment safely to and from show floor.',
    tier2: 55,
    tier1: 60,
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

const equipmentOperatorsData = [
  {
    role: 'BOOM Op',
    abrv: 'BOOM',
    description: 'Certified to operate boom lifts and other aerial work platforms. Executes elevated tasks safely under the direction of a lead.',
    tier2: 65,
    tier1: 70,
  },
  {
    role: 'Forklift Op',
    abrv: 'FORK',
    description: 'Certified forklift operator responsible for safe equipment/material transport on show site. Does not perform load cabling.',
    tier2: 60,
    tier1: 65,
  },
  {
    role: 'LULL/ TELE FORK/ Class 7',
    abrv: 'LULL',
    description: 'Certified telehandler (lull) operator. Handles heavy load lifting and placement for event setups.',
    tier2: 75,
    tier1: 80,
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


const LiveEventRateSheet = () => {
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          // "& .MuiTypography-root": {
          //   lineHeight: "1.75rem",
          //   fontSize: "1.15rem"
          // },
        }}
      >
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
          rolesData={showManagementData}
          heading={"Show Management Data"}
        />

        <RoleTable
          rolesData={meetingRoomsData}
          heading={"Meeting Rooms/Breakouts"}
        />

        <RoleTable
          rolesData={exhibitsData}
          heading={"Exhibits"}
        />

        <RoleTable
          rolesData={scenicData}
          heading={"Scenic"}
        />

        <RoleTable
          rolesData={riggingData}
          heading={"Rigging"}
        />

        <RoleTable
          rolesData={equipmentOperatorsData}
          heading={"Equipment Operators"}
        />
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
          name={"Live Event Rate Sheet.pdf"}
          url={"https://showphaze-dev.s3.ca-central-1.amazonaws.com/Rate-Sheet/live+event+rate+sheet_forPrint.pdf"}
        />
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

export default LiveEventRateSheet;