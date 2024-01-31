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
      <div className="rounded w-[200px] h-[300px] animate-pulse bg-purple-900/20"></div>
    )
  }

  return (
    <Fragment key={image?.id}>
      <img
        className="object-cover w-full h-full rounded"
        width={400}
        height={400}
        src={image?.src?.large!}
        alt=""
      />
    </Fragment>
  )
}
