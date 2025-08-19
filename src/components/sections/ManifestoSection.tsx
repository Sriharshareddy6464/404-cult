import React from 'react';

const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-12"><span className="gradient-text font-mono">&lt;Our Manifesto&gt;</span></h2>
        <div className="space-y-8 text-lg text-gray-300">
          <p>We are the builders of the unseen, the architects of the digital fringe. We believe in <span className="text-purple-400 font-bold">radical collaboration</span> and the power of the shared toolkit. Code is not just a tool; it's our ritual.</p>
          <p>404 CULT exists to arm developers with an arsenal of powerful, beautiful, and strange UI components. We reject boilerplate and embrace the bespoke. We find what's missing and <span className="text-purple-400 font-bold">we build it together</span>.</p>
          <p>Our currency is contribution. Our goal is to accelerate creation. Your next project starts here, not from scratch, but from the shoulders of the CULT.</p>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;