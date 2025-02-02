import { useState, useEffect } from 'react';

export function useAgeVerification() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    onClose: handleClose
  };
} 