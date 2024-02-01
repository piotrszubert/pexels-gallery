import { Photo } from "@/types"
import { Heart, Info, Share } from "lucide-react"
import Image from "next/image"

interface ImageCardProps {
  image?: Photo
  loadingPlaceholder?: boolean
}

export const ImageCard = ({
  image,
  loadingPlaceholder = false,
}: ImageCardProps) => {
  if (loadingPlaceholder) {
    return (
      <div className="rounded h-[500px] md:h-[400px] animate-pulse bg-purple-900/20"></div>
    )
  }

  return (
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
          {/* <button className="inline-flex items-center justify-center">
            <Heart size={24} strokeWidth={1.5} />
          </button>
          <button className="inline-flex items-center justify-center">
            <Share size={24} strokeWidth={1.5} />
          </button> */}
          <button className="inline-flex items-center justify-center">
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
  )
}
