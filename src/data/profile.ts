// Single source for name, links and the positioning sentence.
// Phone number is deliberately absent (plan decision 9.5).

export const profile = {
  name: 'AbdElrahman Khalil',
  // The paper and the GitHub account use this form; stated once on /about/ (decision 9.7).
  altName: 'AbdElrhman Mamdouh',
  role: 'Embedded Software Engineer',
  location: 'Open to work anywhere',
  positioning: 'Embedded software engineer',
  positioningDetail:
    'I write embedded C for automotive ECUs, bring up embedded Linux and Android under hypervisors, and build AI tools that write and fix unit tests.',
  availability: '2+ years in automotive · open to embedded application and embedded Linux roles, anywhere',
  description:
    'Embedded software engineer with 2+ years on automotive OEM and Tier-1 projects: AUTOSAR Classic, embedded Linux and Android bring-up under hypervisors, and multi-agent LLM tools for test engineering.',
  // Email is assembled in the browser to cut scraping (plan 5.9). Parts are joined at runtime.
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

// Home-page metric strip: outcomes a recruiter can read in a few seconds.
export const headlineMetrics = [
  { value: '60%', label: 'less unit-test writing time with AI agents I built' },
  { value: '2', label: 'hypervisors where I brought up Android Bluetooth' },
  { value: '17–20 FPS', label: 'driver monitoring on an edge chip, up from under 1' },
  { value: 'IEEE', label: 'co-authored paper, MIUCC 2024' },
];

// One job, with the programmes it covers nested under it.
export const experience = [
  {
    date: '07/2024 – present',
    title: 'Embedded Software Engineer',
    org: 'eJad for Engineering Systems',
    current: true,
    items: [
      { date: '08/2024 – present', title: 'Central ADAS ECU', org: 'German OEM', href: '/projects/adas-ecu-ethernet-switch-driver/' },
      { date: '02/2025 – present', title: 'R&D and AI engineering', org: 'eJad', href: '/projects/ai-test-generation/' },
      { date: '02/2026 – present', title: 'High-performance cockpit platform', org: 'Tier-1 supplier', href: '/projects/bluetooth-under-hypervisors/' },
      { date: '10/2026 – 11/2026', title: 'Bluetooth / Wi-Fi over Ethernet', org: 'motorcycle OEM', href: '/projects/bluetooth-wifi-over-ethernet/' },
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
