// Single source for name, links and the positioning sentence.

export const profile = {
  name: 'AbdElrahman Khalil',
  altName: 'AbdElrhman Mamdouh',
  role: 'Embedded Software Engineer',
  positioning: 'Embedded software engineer',
  positioningDetail:
    'I bring up Android and embedded Linux under hypervisors on new automotive hardware, write AUTOSAR Classic software for ECUs, and build AI tools that write and fix unit tests.',
  availability: '2+ years in automotive · open to embedded application and embedded Linux roles',
  description:
    'Embedded software engineer with 2+ years on automotive OEM and Tier-1 projects: AUTOSAR Classic, embedded Linux and Android bring-up under hypervisors, and multi-agent LLM tools for test engineering.',
  // Email is assembled in the browser to cut scraping.
  emailUser: 'abdelrhmanm2012',
  emailDomain: 'gmail.com',
  linkedin: 'https://www.linkedin.com/in/abdelrahmanmkhalil/',
  github: 'https://github.com/AbdElrhmanMamdouh',
  githubHandle: 'AbdElrhmanMamdouh',
  resumePdf: '/resume.pdf',
  resumePdfName: 'AbdElrahman-Khalil-Resume.pdf',
  employer: 'eJad for Engineering Systems',
  paper: {
    title: 'Optimizing Driver Monitoring System Performance on TI-TDA4VM Edge Device',
    venue: '2024 International Mobile, Intelligent, and Ubiquitous Computing Conference (MIUCC), IEEE',
    authors: 'M. A. Fathy, A. Ramadan, A. Mamdouh, A. Emad, N. Atia, M. Ghareeb, A. Aboelkheir',
    doi: '10.1109/MIUCC62295.2024.10783523',
    url: 'https://doi.org/10.1109/MIUCC62295.2024.10783523',
  },
};

// Home-page strip: the four areas I work in.
export const focusAreas = [
  { value: 'Platform bring-up', label: 'Android 15 and Linux guests on Xen and QNX, BSP and device trees on new SoCs' },
  { value: 'AUTOSAR Classic', label: 'Complex device drivers, UDS diagnostics, DEM, MACsec and DLT on safety MCUs' },
  { value: 'Embedded vision', label: 'Camera pipelines with GStreamer and OpenVX on TI TDA4VM accelerators' },
  { value: 'AI for testing', label: 'LangGraph agents that write, build and fix unit tests for embedded C' },
];

// One job, with the programmes it covers nested under it.
export const experience = [
  {
    date: '07/2024 – present',
    title: 'Embedded Software Engineer',
    org: 'eJad for Engineering Systems',
    current: true,
    items: [
      { date: '02/2026 – present', title: 'High-performance cockpit platform', org: 'Tier-1 supplier', href: '/projects/android-linux-under-hypervisors/' },
      { date: '08/2024 – present', title: 'Central ADAS ECU', org: 'German OEM', href: '/projects/adas-ecu-ethernet-switch-cdd/' },
      { date: '10/2026 – 11/2026', title: 'Bluetooth / Wi-Fi over Ethernet', org: 'motorcycle OEM', href: '/projects/bluetooth-wifi-over-ethernet/' },
      { date: '02/2025 – present', title: 'R&D and AI engineering', org: 'eJad', href: '/projects/ai-test-generation/' },
    ],
  },
  {
    date: '2019 – 2024',
    title: 'B.Sc. Communication and Electronics Engineering',
    org: 'Alexandria University',
    current: false,
    items: [
      { date: '2024', title: 'Graduation project: driver monitoring on TI TDA4VM', org: 'IEEE MIUCC 2024', href: '/projects/driver-monitoring-tda4vm/' },
    ],
  },
];
