import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback) => {

  const ref = useRef();
  useEffect(() => {
    const handleClick = (event) => {

      if (event.target === ref.current) {
        return;
      }
      callback();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick)
    };
  });

  return ref;
};
