export const PILLARS = [
  { id: 'secure',    word: 'Secure.',    caption: 'Everything on screen is encrypted, so anything that leaves the room is unreadable.' },
  { id: 'private',   word: 'Private.',   caption: 'Sensitive details stay hidden. Only the person with access sees them, and only when they look.' },
  { id: 'compliant', word: 'Compliant.', caption: 'Every action is checked against protocol before it happens, then recorded.' },
];

// Sample document. `sensitive` fields get encrypted / redacted.
export const FIELDS = [
  { label: 'Client',   value: 'Aarav Mehta',    sensitive: true },
  { label: 'Account',  value: '4821 5567 9032', sensitive: true },
  { label: 'Forecast', value: 'Rs 4.2 Cr',      sensitive: true },
  { label: 'Status',   value: 'Approved' },
];

// Sample text: replace with the checks and certifications you really stand behind.
export const CHECKS = [
  'Encrypted in transit and at rest',
  'Role-based access confirmed',
  'Sensitive fields masked',
  'Audit trail recorded',
];
