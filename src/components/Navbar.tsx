import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              AI Safety Incident Dashboard
            </h1>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
