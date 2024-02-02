"use client"

import { Dialog } from "@headlessui/react"
import { Photo } from "@/types"
import { ExternalLink } from "lucide-react"
import { useImageModal } from "@/hooks/useImageModal"

export const ImageModal = () => {
  const { isModalOpen, selectedImage, closeModal } = useImageModal();

  return (
    // <div className=" inset-0 grid place-items-center">
      <Dialog open={isModalOpen} onClose={closeModal} className="border rounded-xl max-w-lg p-4">
        <Dialog.Panel>
          <Dialog.Title>Image details</Dialog.Title>
          <Dialog.Description>{selectedImage?.alt}</Dialog.Description>

          <p>
            Photographer:
            <div>
              <a
                target="_blank"
                className="border px-2 py-1 inline-flex gap-2 items-center group"
                href={selectedImage?.photographer_url}
              >
                {selectedImage?.photographer}
                <ExternalLink
                  strokeWidth={1.5}
                  size={14}
                  className="group-hover:scale-125 duration-300"
                />
              </a>
            </div>
          </p>

         <button
          onClick={closeModal}
         >
          Close
         </button>
        </Dialog.Panel>
      </Dialog>
    // </div>
  );
};