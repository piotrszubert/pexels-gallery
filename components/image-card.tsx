import { Photo } from "@/types"
import { Heart, Info, Share2 } from "lucide-react"
import Image from "next/image"
import { ImageModal } from "./image-modal"
import { useState } from "react"

interface ImageCardProps {
  image?: Photo
  loadingPlaceholder?: boolean
}

export const ImageCard = ({
  image,
  loadingPlaceholder = false,
}: ImageCardProps) => {
  let [isOpen, setIsOpen] = useState(false)

  if (loadingPlaceholder) {
    return (
      <div className="rounded h-[500px] md:h-[400px] animate-pulse bg-purple-900/20"></div>
    )
  }

  return (
    <>
      <div className="relative h-[500px] md:h-[400px] overflow-hidden rounded group">
        <Image
          className="object-cover group-hover:scle-100 transition-all duration-300"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          src={image?.src?.large!}
          alt={image?.alt ? image?.alt : "image"}
        />
        <div className="absolute overflow-hidden -bottom-20 group-hover:bottom-0 w-full transition-all duration-300">
          <div className="flex items-center jus gap-3 py-2 px-3 backdrop-blur-sm bg-purple-900/60 w-full">
            {/* <button className="inline-flex items-center justify-center p-1 rounded hover:scale-110 duration-300">
            <Heart size={24} strokeWidth={1.5} />
          </button> */}
            {/* <button className="inline-flex items-center justify-center p-1 rounded hover:scale-110 duration-300">
              <Share2 size={24} strokeWidth={1.5} />
            </button> */}

            {/* OPEN MODAL BUTTON */}
            {/* <button className="inline-flex items-center justify-center p-1 rounded hover:scale-110 duration-300">
            <Info size={24} strokeWidth={1.5} />
          </button> */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-1 rounded hover:scale-110 duration-300"
            >
              <Info size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        {/* <div className="absolute overflow-hidden -top-10 group-hover:top-0 w-full transition-all duration-300">
        <div className="py-2 px-3 backdrop-blur-sm bg-purple-900/60 w-full">
          <button>
            Like
          </button>
        </div>
      </div> */}
      </div>
      <ImageModal open={isOpen} close={() => setIsOpen(false)} image={image!} />
    </>
  )
}
