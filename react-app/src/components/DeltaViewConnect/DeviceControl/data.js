export const ORDER = ['display', 'laptop', 'phone', 'tablet'];

export const DEVICES = {
  display: { label: 'The display', layout: 'focus' },
  laptop:  { label: 'Laptop', layout: 'grid',  pos: { left: '12%', top: '66%' } },
  phone:   { label: 'Phone',  layout: 'solo',  pos: { left: '50%', top: '90%' } },
  tablet:  { label: 'Tablet', layout: 'split', pos: { left: '88%', top: '66%' } },
};

export const LAYOUTS = {
  grid:  { label: 'Grid',  hint: 'Every tile in view, for open discussion.', tiles: ['revenue', 'agenda', 'camera', 'room'] },
  focus: { label: 'Focus', hint: 'One main view with supporting panels.',    tiles: ['revenue', 'agenda', 'camera'] },
  split: { label: 'Split', hint: 'Two views side by side for comparing.',    tiles: ['revenue', 'agenda'] },
  solo:  { label: 'Solo',  hint: 'One view only, full attention on the presenter.', tiles: ['revenue'] },
};
