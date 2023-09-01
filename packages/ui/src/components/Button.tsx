import React from 'react';

export const Button: React.FC = () => {
  return (
    <button
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert is being used for demo purposes only
        alert('booped');
      }}
      type="button"
    >
      Boop
    </button>
  );
};
