'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import '../QRCodeModal/QRCodeModal.css';

const QRCodeModal = ({ show, onClose, amount, paymentFor, onPaymentSuccess }) => {
  if (!show) {
    return null;
  }

  // Effect to handle the Escape key to close the modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className="qr-modal-overlay" onClick={onClose}>
      <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="qr-modal-close-btn" onClick={onClose}>&times;</button>
        <div className="qr-modal-header">
          <h2>Complete Your Payment</h2>
          <p>Scan the QR code using any UPI app</p>
        </div>
        <div className="qr-modal-body">
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=medlist@paytm%26pn=Medlist%26am=100%26cu=INR"
            alt="UPI QR Code for payment"
            width={250}
            height={250}
            className="qr-code-image"
            priority
            unoptimized
          />
          <div className="payment-details">
            <p><strong>Amount to Pay:</strong> ₹{amount.toFixed(2)}</p>
            <p><strong>For:</strong> {paymentFor}</p>
          </div>
          <div className="payment-simulation">
             <p className="scanner-info">Waiting for payment confirmation...</p>
             <button className="confirm-payment-btn" onClick={onPaymentSuccess}>
                Simulate Successful Payment
             </button>
          </div>
        </div>
        <div className="qr-modal-footer">
          <p>Powered by Medlist Secure Payments</p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;