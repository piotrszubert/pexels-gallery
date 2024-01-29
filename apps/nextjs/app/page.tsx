import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="px-4">
      <Hero />
      <Suspense fallback={<div className="bg-red-300">elooooo</div>}>
        <Gallery />
      </Suspense>
      <Footer />
    </main>
  )
}
