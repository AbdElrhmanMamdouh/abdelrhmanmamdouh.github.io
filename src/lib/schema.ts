import { profile } from '../data/profile';

export function personId(site: URL | undefined): string {
  return `${(site?.toString() ?? '').replace(/\/$/, '')}/#me`;
}

export function personLd(site: URL | undefined) {
  const url = site?.toString() ?? '';
  return {
    '@type': 'Person',
    '@id': personId(site),
    name: profile.name,
    alternateName: profile.altName,
    jobTitle: profile.role,
    description: profile.description,
    url,
    sameAs: [profile.linkedin, profile.github],
    worksFor: { '@type': 'Organization', name: profile.employer },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Alexandria University' },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Embedded Software Engineer',
      occupationalCategory: '15-1252.00',
      skills:
        'Platform bring-up, embedded Linux, Android Automotive, Xen, QNX Hypervisor, AUTOSAR Classic, Complex Device Drivers, automotive Ethernet, UDS, MACsec, ISO 26262, ASPICE',
    },
    knowsAbout: [
      'Board bring-up and BSP', 'Embedded Linux', 'Linux kernel drivers', 'Device trees', 'Yocto', 'Xen', 'QNX Hypervisor',
      'Android Automotive (AAOS)', 'AUTOSAR Classic', 'Complex Device Drivers', 'UDS and DEM diagnostics', 'Automotive Ethernet',
      'MACsec', 'DLT', 'Bluetooth', 'SOME/IP', 'ISO 26262', 'ASPICE', 'TI TDA4VM', 'GStreamer', 'OpenVX', 'LangGraph', 'LLM agents',
    ],
    knowsLanguage: ['ar', 'en'],
  };
}

export function paperLd(site: URL | undefined) {
  return {
    '@type': 'ScholarlyArticle',
    name: profile.paper.title,
    headline: profile.paper.title,
    author: { '@id': personId(site) },
    isPartOf: { '@type': 'Periodical', name: profile.paper.venue },
    datePublished: '2024',
    sameAs: profile.paper.url,
    url: profile.paper.url,
  };
}
