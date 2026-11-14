// Skill groups (plan 3.4), reduced to skills that a project proves (plan 3.1).
// Each name here must match a `skills[].name` in some project's front matter;
// the skills page and matrix are generated from those, so nothing goes stale.
// A skill with no project behind it is not shown (it can stay on the PDF resume).

export const skillGroups: { id: string; name: string; skills: string[] }[] = [
  { id: 'languages', name: 'Languages', skills: ['C', 'C++', 'Python', 'Rust (basic)'] },
  {
    id: 'automotive',
    name: 'Automotive software',
    skills: ['AUTOSAR Classic / CDD', 'UDS / DEM / DTCs', 'SOME/IP', 'Functional safety (ISO 26262)', 'Static analysis (MISRA C)'],
  },
  {
    id: 'networking',
    name: 'Networking and connectivity',
    skills: ['Automotive Ethernet switching', 'MACsec / IPsec / crypto', 'Bluetooth Classic / BLE'],
  },
  {
    id: 'embedded-linux',
    name: 'Embedded Linux and platforms',
    skills: ['Linux kernel / drivers', 'Device trees', 'Yocto', 'Hypervisors (Xen, QNX)', 'Android / AAOS / AOSP', 'RTOS / MCU firmware'],
  },
  {
    id: 'testing',
    name: 'Testing and quality',
    skills: ['Unit testing / coverage', 'System test frameworks', 'Performance optimisation'],
  },
  { id: 'ai', name: 'AI engineering', skills: ['LLM agents / LangGraph', 'RAG'] },
  {
    id: 'tools',
    name: 'Architecture, tools and hardware',
    skills: ['System architecture', 'Desktop tools / GUI (Qt)', 'Hardware / PCB'],
  },
];

export const levelMark = { production: '●', built: '◐', evaluated: '○' } as const;
export const levelLabel = {
  production: 'Production: used in a client or series-production project',
  built: 'Built: I built and tested it in a tool, prototype or demo',
  evaluated: 'Evaluated: hands-on evaluation or university work',
} as const;
export const levelRank = { production: 3, built: 2, evaluated: 1 } as const;
