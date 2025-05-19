'use client';

// react-scan must be imported before react
import { useEffect } from 'react';
import { scan } from 'react-scan';

const ReactScan = () => {
  useEffect(() => {
    scan({
      enabled: true,
    });
  }, []);

  return <></>;
};

export default ReactScan;
