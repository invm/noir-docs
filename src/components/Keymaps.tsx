import React from 'react';
import Link from "@docusaurus/Link"

const KEYMAPS = [
  {
    category: 'Global',
    keys: [{ action: 'Show keyboard shortcuts', keys: ['F1'] }],
  },
  {
    category: 'Navigation',
    keys: [
      { action: 'Select tab', keys: ['Alt/Cmd', 'number'] },
      { action: 'Select connection tab', keys: ['Ctrl/Cmd', 'number'] },
      { action: 'Add new connection', keys: ['Ctrl/Cmd', '` (tilde)'] },
    ],
  },
  {
    category: 'Editor',
    keys: [
      { action: 'Execute query', keys: ['Ctrl', 'E/Enter'] },
      { action: 'New tab', keys: ['Ctrl/Cmd', 'T'] },
      { action: 'Close current tab', keys: ['Ctrl/Cmd', 'W'] },
      { action: 'Focus on editor', keys: ['Ctrl', 'L'] },
      { action: 'Format query', keys: ['Ctrl', 'Shift', 'F'] },
      { action: 'Trigger autocomplete in editor', keys: ['Ctrl', 'Space'] },
      { action: 'Search', keys: ['Ctrl/Cmd', 'F'] },
    ],
  },
  {
    category: 'Results table',
    keys: [
      { action: 'Navigation', keys: ['←', '↑', '→', '↓'] },
      { action: 'Navigate to start/end', keys: ['Ctrl/Cmd', '←', '→'] },
      { action: 'Navigate to top/bottom', keys: ['Ctrl/Cmd', '↑', '↓'] },
      { action: 'Next cell', keys: ['Tab'] },
      { action: 'Previous cell', keys: ['Shift', 'Tab'] },
      { action: 'Select next/previous result', keys: ['Ctrl', 'Shift', 'N/P'] },
      { action: 'Select next/previous page', keys: ['Ctrl', 'N/P'] },
      { action: 'Export as CSV', keys: ['Ctrl', 'Shift', 'C'] },
      { action: 'Export as JSON array', keys: ['Ctrl', 'Shift', 'J'] },
    ],
  },
  {
    category: 'Data tab table',
    description: 'When right-clicking on a table/view and selecting "View data", the following shortcuts are available',
    keys: [
      { action: 'Add row', keys: ['Alt/Cmd', 'N'] },
      { action: 'Save add/edit row form', keys: ['Ctrl/Cmd', 'S'] },
    ],
  },
  {
    category: 'Editor in Vim Mode',
    description: 'Most of the Vim commands are supported. The following are custom commands',
    keys: [{ action: 'Scroll autocomplete suggestions up/down', keys: ['Ctrl', 'J/K'] }],
  },
];

type ShortcutProps = {
  key?: string;
  action: string;
  keys: Array<string>;
};

type CategoryProps = {
  key?: string;
  category: string;
  description?: string;
  keys: Array<ShortcutProps>;
};

const Shortcut = ({ action, keys }: ShortcutProps) => {
  return (
    <div>
      <span>{action}</span>
      <span style={{ marginLeft: 8 }}>
        {keys.map((key) => (
          <button style={{ marginLeft: 4, marginRight: 4 }} key={key}>
            {key}
          </button>
        ))}
      </span>
    </div>
  );
};

const Category = ({ category, description, keys }: CategoryProps) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <h3 id={category.toLowerCase()}>{category} <Link to={'#' + category.split(' ').join('').toLowerCase()}>#</Link></h3>
      {!!description && <p>{description}</p>}
      {keys.map((shortcut) => (
        <Shortcut key={shortcut.action} {...shortcut} />
      ))}
    </div>
  );
};

export const Keymaps = () => {
  return (
    <div>
      {KEYMAPS.map((category) => (
        <Category key={category.category} {...category} />
      ))}
    </div>
  );
};
