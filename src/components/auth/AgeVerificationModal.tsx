import { useState } from 'react';
import { useRouter } from 'next/router';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const translations = {
  pt: {
    title: 'Verificação de Idade',
    description: 'Por favor, confirme que você tem idade legal para consumir bebidas alcoólicas em seu país ou território.',
    confirm: 'Sim, tenho idade legal para beber',
    deny: 'Não, não tenho idade legal para beber',
    error: 'Você precisa ter idade legal para acessar este site.'
  },
  en: {
    title: 'Age Verification',
    description: 'Please confirm that you are of legal drinking age in your country or territory.',
    confirm: 'Yes, I am of legal drinking age',
    deny: 'No, I am not of legal drinking age',
    error: 'You must be of legal drinking age to access this website.'
  }
};

export const AgeVerificationModal = ({ isOpen, onClose }: AgeVerificationModalProps) => {
  const [error, setError] = useState('');
  const { locale = 'en' } = useRouter();
  const t = translations[locale as keyof typeof translations];

  const handleVerify = () => {
    onClose();
  };

  const handleDeny = () => {
    setError(t.error);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">{t.title}</h2>
        <p className="text-gray-600 mb-6 text-center">
          {t.description}
        </p>
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}
        <div className="flex flex-col space-y-3">
          <Button onClick={handleVerify}>
            {t.confirm}
          </Button>
          <Button variant="secondary" onClick={handleDeny}>
            {t.deny}
          </Button>
        </div>
      </div>
    </Modal>
  );
}; 