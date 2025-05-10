import { useState } from 'react';
import FullScreenLoader from '../components/global/FullScreenLoader';

const useScreenLoader = () => {
  const [loading, setLoading] = useState(false);

  const Loader = () => {
    return loading ? <FullScreenLoader /> : null;
  };

  return {
    loading,
    setLoading,
    Loader,
  };
};

export default useScreenLoader;
