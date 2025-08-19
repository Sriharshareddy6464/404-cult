import React from 'react';
import FakeCrashSection from './sections/FakeCrashSection.tsx';
import HeroSection from './sections/HeroSection.tsx';
import FeaturedWorkSection from './sections/FeaturedWorkSection.tsx';
import InsightsSection from './sections/InsightsSection.tsx';
import ManifestoSection from './sections/ManifestoSection.tsx';
import CTASection from './sections/CTASection.tsx';
import Footer from './sections/Footer.tsx';
import ScrollingBanner from './ScrollingBanner.tsx';
import Header from './Header.tsx';

const HomePage: React.FC = () => {
  return (
    <main>
      <Header />
      <FakeCrashSection />
      <ScrollingBanner />
      <HeroSection />
      <FeaturedWorkSection />
      <ManifestoSection />
      <InsightsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default HomePage;