// components/ModalController.jsx
import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignModal from './SignModal';


const ModalController = () => {
  const [activeModal, setActiveModal] = useState('login');

  const closeModal = () => setActiveModal(null);
  const switchToSign = () => setActiveModal('signup');
  const switchToLogin = () => setActiveModal('login');

  return (
    <>
      {activeModal === 'login' && (
        <LoginModal closeModal={closeModal} switchToSignUp={switchToSign} />
      )}
      {activeModal === 'signup' && (
        <SignModal closeModal={closeModal} switchToLogin={switchToLogin} />
      )}
    </>
  );
};

export default ModalController;
