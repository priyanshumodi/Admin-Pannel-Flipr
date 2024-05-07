import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Admin Dashboard</p>
    </footer>
  );
};

export default Footer;
