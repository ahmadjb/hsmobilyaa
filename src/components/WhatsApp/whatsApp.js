// WhatsAppIcon.js

import React from 'react';
import whatsAppPhoto from '../../Data/whatsapp-icon.png';

const WhatsAppIcon = ({ phoneNumber }) => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img
                src={whatsAppPhoto} // Replace with the path to your WhatsApp icon image
                alt="WhatsApp"
                width="65" // Adjust the size as needed
               
            />
        </a>
    );
};

export default WhatsAppIcon;


{/*// WhatsAppIcon.js

import React from 'react';
import whatsAppPhoto from '../../Data/whatsapp-icon.png';

const WhatsAppIcon = ({ phoneNumber, imageUrl }) => {
  const message = encodeURIComponent(`Bu resme göz atın: ${imageUrl}`);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <img
        src={whatsAppPhoto} // Replace with the path to your WhatsApp icon image
        alt="WhatsApp"
        width="60" // Adjust the size as needed
        
      />
    </a>
  );
};

export default WhatsAppIcon;

*/}

