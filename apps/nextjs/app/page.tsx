import { Hero } from "@/components/hero";

const images = [
  {url: "https://via.placeholder.com/200x400", title: ""},
  {url: "https://via.placeholder.com/200x400", title: ""},
  {url: "https://via.placeholder.com/200x400", title: ""},
  {url: "https://via.placeholder.com/200x400", title: ""},
]

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto mt-24">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-slate-300 min-h-[300px] min-w-[100px] rounded-xl"
          > 
          </div>
        ))} 
      </div>
    </main>
  )
}
