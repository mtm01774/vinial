import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/layout/Hero';
import { FeaturedWines } from '../components/layout/FeaturedWines';
import { SubscriptionPreview } from '../components/subscription/SubscriptionPreview';
import { AgeVerificationModal } from '../components/auth/AgeVerificationModal';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showAgeVerification, setShowAgeVerification] = useState(false);

  useEffect(() => {
    const hasVerifiedAge = localStorage.getItem('ageVerified');
    if (!hasVerifiedAge) {
      setShowAgeVerification(true);
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <FeaturedWines />
      <SubscriptionPreview />
      <AgeVerificationModal 
        isOpen={showAgeVerification}
        onClose={() => setShowAgeVerification(false)}
      />
    </Layout>
  );
} 