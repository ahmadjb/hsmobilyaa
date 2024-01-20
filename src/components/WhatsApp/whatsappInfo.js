import React from 'react';
import whatsAppPhoto from '../../Data/whatsapp-icon.png';

const WhatsAppIcon = ({ phoneNumber, imageUrl, text }) => {
    const message = encodeURIComponent(`Bu resme göz atabilir misiniz? ${imageUrl}%0A - Açıklaması: ${text}`);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <img
        src={whatsAppPhoto} // Replace with the path to your WhatsApp icon image
        alt="WhatsApp"
        width="40" // Adjust the size as needed
      />
    </a>
  );
};

export default WhatsAppIcon;
