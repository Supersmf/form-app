import { useEffect, useRef, useCallback } from 'react';

export default function useComponentUnVisible(setUnVisible: () => void) {
  const ref = useRef<any>(null);

  const handleClickOutside: (element: MouseEvent) => void = useCallback(
    ({ target }) => {
      if (!ref.current?.contains(target)) {
        setUnVisible();
      }
    },
    [setUnVisible]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref };
}
