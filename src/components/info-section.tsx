import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InfoSection() {
  return (
    <section className="container py-24 space-y-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the NFT</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>The Artwork</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This unique digital masterpiece represents the convergence of art and technology. Each NFT is a one-of-a-kind creation, minted on the blockchain for authenticity and ownership.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>The Creator</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Created by renowned digital artist Jane Doe, this NFT collection showcases her signature style of blending surrealism with futuristic elements. Jane&apos;s work has been featured in major digital art exhibitions worldwide.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

