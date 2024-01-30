'use client';

import { useState, useEffect, Fragment } from "react";

export const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/images`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setImages(data.data.photos);

        console.log(data.data.photos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto mt-24">
      {images.map((image, index) => (
        <Fragment
          key={image['id']}
        >
          <img className="object-cover w-full h-full rounded" width={400} height={400} src={image['src']['medium']} alt="" />
        </Fragment>
        // <div
        //   key={image.title}
        //   className="border rounded-xl overflow-hidden"
        // >
        //   <img className="object-cover w-full h-full rounded" src={image.url + `?random=${index}`} alt={image.title} />
        // </div>
      ))}
    </div>
  );
};
