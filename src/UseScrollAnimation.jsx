import { useEffect, useRef, useState } from 'react';

const UseScrollAnimation = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Optional: Trigger only once
          }
        },
        {
          threshold: 0.2, // Adjust to trigger earlier/later
        }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
  }, []);

  return [ref, isVisible];
};

export default UseScrollAnimation;
