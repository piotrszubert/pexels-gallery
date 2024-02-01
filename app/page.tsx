import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"
import { Hero } from "@/components/hero"

export default async function Home() {
  return (
    <main className="px-4">
      <Hero />
      <Gallery />
      <Footer />
    </main>
  )
}
