"use client"
import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';
import InfoSection from '@/components/info-section';
import Navbar from '@/components/navbar';
import { getContract } from 'thirdweb';
import { sepolia } from 'thirdweb/chains';
import { getContractMetadata } from 'thirdweb/extensions/common';
import { ThirdwebProvider, useReadContract } from "thirdweb/react";
import { client } from './client';

export default function NFTLandingPage() {
  const contract = getContract({
    client: client,
    chain: sepolia,
    address: process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS as string
  })

  const {data: contractMetadata}=useReadContract(
    getContractMetadata, {
      contract: contract
    }
  );
  console.log(contractMetadata);
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




