import { CheckCircle } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    "Exclusive access to virtual art galleries",
    "Invitations to private artist meet-and-greets",
    "Early access to future NFT drops",
    "Voting rights on community-driven projects",
    "Fractional ownership in collaborative artworks",
    "Special discounts on physical art prints"
  ]

  return (
    <section className="container py-24 space-y-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Holder Benefits</h2>
      <ul className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}


