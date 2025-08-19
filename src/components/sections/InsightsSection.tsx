import React from 'react';
import { COMMUNITY_INSIGHTS } from '../../constants';

const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Community Insights
        </h2>
        <div className="space-y-8 text-lg text-gray-300">
          {COMMUNITY_INSIGHTS.map((insight) => (
            <div key={insight.id} className="text-left bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">{insight.title}</h3>
              <p>{insight.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;