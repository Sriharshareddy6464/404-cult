import React from 'react';

interface CardProps {
  title: string;
  description: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, description, tags }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all transform hover:-translate-y-2">
      <div className="h-48 mb-4 bg-gray-800 rounded-lg flex items-center justify-center font-mono text-purple-400">[Animated Preview]</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex gap-2 justify-center">
        {tags.map(tag => (
          <span key={tag} className="bg-gray-700 text-xs font-semibold px-2 py-1 rounded-full">#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;