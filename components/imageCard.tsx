import { Photo } from "@/types"
import Image from "next/image"
import { Fragment } from "react"

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
    <div className="relative h-[500px] md:h-[400px]">
      <Image
        className="object-cover w-full h-full rounded"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
        src={image?.src?.large!}
        alt={image?.alt ? image?.alt : "image"}
      />
    </div>
  )
}
