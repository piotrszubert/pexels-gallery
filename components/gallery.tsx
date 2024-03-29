"use client"

import { useState, useEffect } from "react"
import { ImageCard } from "./image-card"

export const Gallery = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/images`)

        if (!response.ok) {
          setIsLoading(false)
          throw new Error("Failed to fetch data")
        }

        const data = await response.json()
        setIsLoading(false)
        setImages(data.data.photos)
      } catch (error) {
        setIsLoading(false)
        console.error(error)
      }
    }

    fetchImages()
  }, [])

  if (isLoading) {
    const images = []
    const iterations = 12

    for (let i = 0; i < iterations; i++) {
      images.push(<ImageCard key={i} loadingPlaceholder={true} />)
    }

    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto mt-24">
        {images}
      </div>
    )
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto mt-24">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
    </div>
  )
}
