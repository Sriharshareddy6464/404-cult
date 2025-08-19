// src/constants.ts
import type { FeaturedWork, Insight } from './types';

export const FEATURED_WORKS: FeaturedWork[] = [
  {
    id: 1, // Add this line
    title: 'Glitch Button',
    description: 'A button that fragments on hover. Perfect for grabbing attention.',
    tags: ['CSS', 'JS'],
  },
  {
    id: 2, // Add this line
    title: 'Particle Field',
    description: 'An interactive particle background that reacts to mouse movement.',
    tags: ['ThreeJS', 'React'],
  },
  {
    id: 3, // Add this line
    title: 'Holographic Card',
    description: 'A card that reveals a holographic sheen based on cursor position.',
    tags: ['CSS', 'VanillaJS'],
  },
];

export const COMMUNITY_INSIGHTS: Insight[] = [
  {
    id: 1, // Add this line
    title: 'The Rise of Glassmorphism',
    content: 'Our latest trend report shows a 60% increase in glassmorphism in Dribbble shots over the past quarter. Designers are embracing depth and texture to create more engaging interfaces.',
  },
  {
    id: 2, // Add this line
    title: 'AI in UI: Beyond Automation',
    content: 'Community discussions highlight a shift from using AI for simple automation to co-creation. Generative tools are becoming indispensable partners in the creative process.',
  },
  {
    id: 3, // Add this line
    title: 'Accessibility First, Not an Afterthought',
    content: 'A strong consensus is forming around integrating accessibility from day one of the design process. It\'s not just a checklist; it\'s about inclusive design thinking.',
  },
];