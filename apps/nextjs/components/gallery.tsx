const images = [
  { url: "https://via.placeholder.com/200x400", title: "" },
  { url: "https://via.placeholder.com/200x400", title: "" },
  { url: "https://via.placeholder.com/200x400", title: "" },
  { url: "https://via.placeholder.com/200x400", title: "" },
]

export const Gallery = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto mt-24">
      {images.map((image) => (
        <div
          key={image.title}
          className="border rounded-xl overflow-hidden"
        >
          <img className="object-cover w-full h-full rounded" src={image.url} alt={image.title} />
        </div>
      ))}
    </div>
  );
}