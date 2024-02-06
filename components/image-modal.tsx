import { Photo } from "@/types"
import { Dialog } from "@headlessui/react"
import { ExternalLink, X } from "lucide-react"
import { useState } from "react"

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
        <Dialog.Panel className="bg-black max-w-lg w-full rounded-lg border border-zinc-800 shadow-2xl p-4">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-lg">Image details</Dialog.Title>
            <button onClick={close} className="hover:text-purple-400">
              <X />
            </button>
          </div>
          <Dialog.Description>{image?.alt}</Dialog.Description>
          <p>
            Photographer:
            <div>
              <a
                target="_blank"
                className="border px-2 py-1 inline-flex gap-2 items-center group"
                href={image?.photographer_url}
              >
                {image?.photographer}
                <ExternalLink
                  strokeWidth={1.5}
                  size={14}
                  className="group-hover:scale-125 duration-300"
                />
              </a>
            </div>
          </p>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
