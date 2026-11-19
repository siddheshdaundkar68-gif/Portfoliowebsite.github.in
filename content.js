export const PRICE = '₹10,000 – ₹15,000';
export const EMAIL = 'siddheshdaundkar68@gmail.com';

export const GROUPS = {
  Languages: ['C', 'C++', 'JavaScript'],
  Web: ['HTML', 'CSS', 'Web Development'],
  Core: ['Data Structures', 'DBMS', 'Computer Science'],
  Content: ['UGC', 'UGC Ads', 'Short-form Video'],
  AI: ['Faceless AI Videos', 'AI Tools', 'AI Creation'],
};
export const SKILLS = Object.entries(GROUPS).flatMap(([g, ws]) => ws.map((w) => ({ w, g })));

export const PROJECTS = [
  {
    tag: 'Web · Frontend',
    title: 'Web',
    em: 'Development',
    desc: 'Building clean, responsive websites with HTML, CSS and JavaScript — fast to load and easy to use on every screen. Websites for clients: ' + PRICE + '.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    tag: 'Content · Ads',
    title: 'UGC',
    em: 'Ads',
    desc: 'User-generated-content style video ads for brands — natural, relatable and made to hold attention.',
    stack: ['UGC', 'Ad Creative', 'Short-form Video'],
  },
  {
    tag: 'AI · Video',
    title: 'Faceless',
    em: 'AI Videos',
    desc: 'Faceless videos made with AI tools — voiceover, visuals and storytelling without ever showing a face.',
    stack: ['AI Tools', 'Voiceover', 'Storytelling', 'Short-form Video'],
  },
];

export const STATS = [
  { label: 'Age', value: 17, suffix: '', h: 3.2 },
  { label: 'Diploma Year', value: 2, suffix: '', h: 1.6 },
  { label: 'Languages', value: 5, suffix: '', h: 2.6 },
  { label: 'Roles', value: 4, suffix: '', h: 2.1 },
];

export const JOURNEY = [
  { year: '01', role: 'Polytechnic Diploma, CSE', place: 'PK Technical Campus', note: 'Computer Science Engineering · Second year' },
  { year: '02', role: 'Web Developer', place: 'HTML · CSS · JavaScript', note: 'Also learning C, C++, Data Structures & DBMS' },
  { year: '03', role: 'UGC & Faceless AI Creator', place: 'UGC Ads · AI Videos', note: 'Creating content professionally' },
];

// [label, title] — shown on the eight orbiting cards
export const CERTS = [
  ['Language', 'C'],
  ['Language', 'C++'],
  ['Web', 'HTML'],
  ['Web', 'CSS'],
  ['Language', 'JavaScript'],
  ['Core', 'Data Structures'],
  ['Core', 'DBMS'],
  ['Creator', 'UGC & Faceless AI'],
];
