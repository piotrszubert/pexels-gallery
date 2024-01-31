import { Photo } from "@/types"
import Image from "next/image"
import { Fragment } from "react"

interface ImageCardProps {
    image?: Photo
}

export const ImageCard = ({image}: ImageCardProps) => {
    return(
        <Fragment
          key={image?.id}
        >
            <Image 
                className="object-cover w-full h-full rounded" 
                width={400} 
                height={400} 
                src={image?.src?.large!} 
                alt="" 
            />
        </Fragment>
    )
}