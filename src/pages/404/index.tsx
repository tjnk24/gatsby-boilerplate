import { useEffect } from 'react';
import { navigate } from 'gatsby';

const PageNotFound = (): null => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
};

export default PageNotFound;
