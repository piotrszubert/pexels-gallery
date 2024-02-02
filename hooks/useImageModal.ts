import { useState } from 'react';
import { Photo } from '@/types';

interface ImageModalState {
  isModalOpen: boolean;
  selectedImage?: Photo;
}

export const useImageModal = () => {
  const [modalState, setModalState] = useState<ImageModalState>({
    isModalOpen: false,
    selectedImage: undefined,
  });

  const openModal = (image: Photo) => {
    setModalState({
      isModalOpen: true,
      selectedImage: image,
    });
    console.log(modalState);
  };

  const closeModal = () => {
    setModalState({
      isModalOpen: false,
      selectedImage: undefined,
    });
  };

  return {
    ...modalState,
    openModal,
    closeModal,
  };
};