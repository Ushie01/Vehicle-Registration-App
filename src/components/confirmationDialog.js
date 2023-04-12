import { useState } from 'react';

function ConfirmationDialog({ message, onConfirm, onCancel }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleConfirm = () => {
    setIsOpen(false);
    onConfirm();
  };

  const handleCancel = () => {
    setIsOpen(false);
    onCancel();
  };

  return (
    isOpen && (
      <div>
        <p>{message}</p>
        <button onClick={handleConfirm}>Confirm</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    )
  );
}

export default ConfirmationDialog;