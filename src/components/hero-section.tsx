import { client } from "@/app/client"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { ContractMetadata } from 'thirdweb/extensions/common'
import { MediaRenderer } from "thirdweb/react"

interface HeroSectionProps {
  contractMetadata?: ContractMetadata
}

export default function HeroSection({ contractMetadata }: HeroSectionProps) {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="relative aspect-square">
         <MediaRenderer
         client={client} 
         source={contractMetadata?.image}
         width="400"
         height="400"
         style={{ borderRadius: "1rem",
          border: "1px solid #e1e1e1",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
          }}/>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{contractMetadata?.name}</h1>
          <p className="text-xl text-muted-foreground">{contractMetadata?.description}</p>
          <Button size="lg">Claim NFT</Button>
        </div>
      </div>
    </section>
  )
}
