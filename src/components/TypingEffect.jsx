import { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, eraseSpeed = 50, eraseDelay = 2000, typingDelay = 500, cursor = '_' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const handleTyping = () => {
      const currentFullText = Array.isArray(text) ? text[currentTextIndex] : text;
      
      if (isDeleting) {
        setDisplayedText(prev => prev.substring(0, prev.length - 1));
      } else {
        setDisplayedText(prev => currentFullText.substring(0, prev.length + 1));
      }

      const currentSpeed = isDeleting ? eraseSpeed : speed;

      if (!isDeleting && displayedText === currentFullText) {
        setTimeout(() => setIsDeleting(true), eraseDelay);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % (Array.isArray(text) ? text.length : 1));
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? eraseSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, text, speed, eraseSpeed, eraseDelay]);

  return (
    <span className="font-mono text-3xl md:text-5xl text-gray-300">
      {displayedText}
      <span className="text-green-500 animate-pulse">{cursor}</span>
    </span>
  );
};

export default TypingEffect;
