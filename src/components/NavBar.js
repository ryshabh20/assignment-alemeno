import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Course App
        </Link>
        <div>
          <Link to="/" className="mx-2">
            Home
          </Link>
          <Link to="/dashboard" className="mx-2">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
