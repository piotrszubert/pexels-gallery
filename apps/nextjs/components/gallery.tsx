'use client';

import { useState, useEffect } from "react";

export const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(process.env.VERCEL_URL)
    const fetchImages = async () => {
      try {
        const response = await fetch(`${process.env.VERCEL_URL}/api/images`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        console.log(data);
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();

    console.log(images)
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto mt-24">
      {images.map((image, index) => (
        <div
          key={image.title}
          className="border rounded-xl overflow-hidden"
        >
          <img className="object-cover w-full h-full rounded" src={image.url + `?random=${index}`} alt={image.title} />
        </div>
      ))}
    </div>
  );
};
