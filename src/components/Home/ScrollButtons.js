import React, { useState, useEffect } from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const ScrollButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className={`scroll-buttons-container ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop} className="scroll-button">
        <ArrowUpOutlined />
      </button>
      <button onClick={scrollToBottom} className="scroll-button">
        <ArrowDownOutlined />
      </button>
    </div>
  );
};

export default ScrollButtons;
