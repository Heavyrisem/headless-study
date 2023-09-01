import React from 'react';

const Header: React.FC<{ text: string }> = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Header;
