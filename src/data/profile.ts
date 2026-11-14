// Single source for name, links and the positioning sentence.
// Phone number is deliberately absent (plan decision 9.5).

export const profile = {
  name: 'AbdElrahman Khalil',
  // The paper and the GitHub account use this form; stated once on /about/ (decision 9.7).
  altName: 'AbdElrhman Mamdouh',
  role: 'Embedded Software Engineer',
  location: 'Alexandria, Egypt',
  positioning: 'Embedded software engineer.',
  positioningDetail:
    'Automotive Ethernet, Bluetooth, Android and Linux bring-up under hypervisors, and AI-assisted test engineering.',
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

// Home-page metric strip. Until employer approval (plan D1), only figures that are
// already on the distributed resume. "104 work items" waits for approval.
export const headlineMetrics = [
  { value: '60%', label: 'less unit-test development time with multi-agent LLM tooling' },
  { value: '928 + 607', label: 'Python tests and C unit checks on a proof of concept' },
  { value: '<1 → 17–20', label: 'FPS on an edge vision SoC' },
  { value: 'IEEE 2024', label: 'co-author, MIUCC conference paper' },
];

export const timeline = [
  { date: '02/2026 – now', title: 'High-performance cockpit platform', org: 'Tier-1 supplier, via eJad', line: 'Android 15 guest on Xen and QNX; Bluetooth bring-up; board bring-up.', current: true },
  { date: '02/2025 – now', title: 'R&D and AI engineering', org: 'eJad', line: 'Multi-agent LLM test generation; open SDV platform evaluations.', current: true },
  { date: '08/2024 – now', title: 'Central ADAS ECU', org: 'German premium OEM, via eJad', line: 'AUTOSAR Classic switch driver, diagnostics, MACsec, test frameworks.', current: true },
  { date: '07/2024', title: 'Embedded Software Engineer', org: 'eJad for Engineering Systems', line: 'Joined after the sponsored graduation project.', current: false },
  { date: '2019 – 2024', title: 'B.Sc. Communication and Electronics Engineering', org: 'Alexandria University', line: 'Graduation project: driver monitoring on TI TDA4VM, published at IEEE MIUCC 2024.', current: false },
];
