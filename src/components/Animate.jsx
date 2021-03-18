import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Animate({ animateClass, children }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && isLoaded) obs.disconnect();
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -10% 0px',
      }
    );
    if (ref.current) observer.observe(ref.current);

    const setIsLoadedTrue = () => setIsLoaded(true);
    // eslint-disable-next-line no-undef
    if (!isLoaded) document.addEventListener('scroll', setIsLoadedTrue);
    // eslint-disable-next-line no-undef
    else document.removeEventListener('scroll', setIsLoadedTrue);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [isLoaded]);

  return (
    <div ref={ref}>
      <div
        className={isIntersecting ? `animate__animated animate__fast ${animateClass}` : 'opacity-0'}
      >
        {children}
      </div>
    </div>
  );
}

Animate.defaultProps = {
  animateClass: 'animate__fadeInUp',
};

Animate.propTypes = {
  children: PropTypes.element.isRequired,
  animateClass: PropTypes.string,
};

export default Animate;
