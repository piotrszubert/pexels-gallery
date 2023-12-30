import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="px-4">
      <Hero />
      <Gallery />
      <footer className="text-gray-400 text-xs pt-8 pb-2 text-center">
        <span className="font-serif text-xl text-purple-200 italic">
          Heading
        </span>
        <br /> 
        &copy; 2023
        <br />
        All rigths reserved.
      </footer>
    </main>
  )
}
