
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="join" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Become a Member</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Get access to the full component library, contribute your own creations, and join our private Discord server.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="email" placeholder="your-email@domain.com" className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 glow-shadow">
            Join Now
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">Join 1,337+ developers already in the CULT.</p>
      </div>
    </section>
  );
};

export default CTASection;