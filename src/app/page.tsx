import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';
import InfoSection from '@/components/info-section';
import Navbar from '@/components/navbar';
import { ThirdwebProvider } from "thirdweb/react";

export default function NFTLandingPage() {
  return (
    <ThirdwebProvider>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <InfoSection />
        <FeaturesSection />
      </main>
    </div>
    </ThirdwebProvider>
  )
}



