import { Photo } from "@/types"
import { Dialog } from "@headlessui/react"
import { ExternalLink, X } from "lucide-react"
import Image from "next/image"

const ModalSectionHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="text-sm font-semibold border-b border-zinc-600">
      {heading}
    </div>
  )
}

export const ImageModal = ({
  open,
  close,
  image,
}: {
  open: boolean
  close: () => void
  image: Photo
}) => {
  return (
    <Dialog open={open} onClose={close}>
      <div
        className="fixed inset-0 bg-purple-900/15 backdrop-blur"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="bg-black max-w-lg w-full rounded-lg border border-zinc-800 shadow-2xl p-4">
              <div className="flex items-center justify-between mb-6">
                <Dialog.Title className="text-lg">Image details</Dialog.Title>
                <button onClick={close} className="hover:text-purple-400">
                  <X />
                </button>
              </div>
              {/* <Dialog.Description></Dialog.Description> */}
              <div className="space-y-6 text-sm">
                <div className="relative h-[400px]">
                  <Image
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    src={image?.src?.large!}
                    alt={image?.alt ? image?.alt : "image"}
                  />
                </div>

                <div className="space-y-3">
                  <ModalSectionHeading heading="Image" />
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <span className="text-zinc-400 text-xs">Dimensions</span>
                      <br />
                      <span>
                        {image?.width}x{image?.height}px
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-xs">
                        Average color
                      </span>
                      <br />
                      {image?.avg_color}
                    </div>
                    <div>
                      {image?.alt && (
                        <div>
                          <span className="text-zinc-400 text-xs">
                            Alt text
                          </span>
                          <br />
                          {image.alt}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <ModalSectionHeading heading="Sizes" />
                  <div className="flex gap-2 flex-wrap">
                    {Object.entries(image.src).map(([size, url]) => (
                      <a
                        target="_blank"
                        className="border rounded-lg py-1 px-2 hover:bg-white hover:text-black duration-300"
                        key={size}
                        href={url}
                      >
                        {size}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <ModalSectionHeading heading="Photographer" />
                  <div>
                    <a
                      target="_blank"
                      className="underline rounded-lg px-2 py-1 inline-flex gap-2 items-center group hover:bg-white hover:text-black duration-300"
                      href={image?.photographer_url}
                    >
                      {image?.photographer}
                      <ExternalLink
                        strokeWidth={1.5}
                        size={14}
                        className="group-hover:scale-125 duration-100"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
