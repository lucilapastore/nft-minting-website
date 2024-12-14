import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface HeroSectionProps {
  contractMetadata?: { name: string }
}

export default function HeroSection({ contractMetadata }: HeroSectionProps) {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="relative aspect-square">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="NFT Preview"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {contractMetadata?.name || "Loading Collection..."}
          </h1>
          <p className="text-xl text-muted-foreground">
            Be part of this unique digital art collection. Limited time offer!
          </p>
          <Button size="lg">Claim NFT</Button>
        </div>
      </div>
    </section>
  )
}

