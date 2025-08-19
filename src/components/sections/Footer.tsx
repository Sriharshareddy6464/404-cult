
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-purple-400">Discord</a>
          <a href="#" className="hover:text-purple-400">GitHub</a>
          <a href="#" className="hover:text-purple-400">Twitter</a>
        </div>
        <p>&copy; {new Date().getFullYear()} 404 CULT. All Rights Reserved. Or are they?</p>
      </div>
    </footer>
  );
};

export default Footer;