
import React from 'react';
import Card from '../ui/Card.tsx';
import { FEATURED_WORKS } from '../../constants.ts';

const FeaturedWorkSection: React.FC = () => {
  return (
    <section id="components" className="py-20 bg-black/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Fresh from the Forge</h2>
        <p className="text-gray-400 mb-12">Our latest and most popular creations. Ready to deploy.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_WORKS.map((work) => (
            <Card
              key={work.id}
              title={work.title}
              description={work.description}
              tags={work.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;