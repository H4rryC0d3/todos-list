import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-2 mt-5">
      <p className="text-center" style={{ fontSize: '14px', margin: '0' }}>
        Copyright &copy; {year} MyTodosList.Com | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
