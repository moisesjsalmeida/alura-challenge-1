import React from 'react';
import colors from '../../styles/colors';

export default function MacTopBar() {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 3,
        padding: '0.5rem',
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6" cy="6" r="6" fill={colors.macRed} />
      </svg>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: '0.5rem' }}
      >
        <circle cx="6" cy="6" r="6" fill={colors.macYellow} />
      </svg>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: '0.5rem' }}
      >
        <circle cx="6" cy="6" r="6" fill={colors.macGreen} />
      </svg>
    </div>
  );
}
