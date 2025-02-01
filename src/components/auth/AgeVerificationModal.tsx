import { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgeVerificationModal = ({ isOpen, onClose }: AgeVerificationModalProps) => {
  const [error, setError] = useState('');

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    onClose();
  };

  const handleDeny = () => {
    setError('You must be of legal drinking age to access this website.');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Age Verification</h2>
        <p className="text-gray-600 mb-6 text-center">
          Please confirm that you are of legal drinking age in your country or territory.
        </p>
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}
        <div className="flex flex-col space-y-3">
          <Button onClick={handleVerify}>
            Yes, I am of legal drinking age
          </Button>
          <Button variant="secondary" onClick={handleDeny}>
            No, I am not of legal drinking age
          </Button>
        </div>
      </div>
    </Modal>
  );
}; 