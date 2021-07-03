import React, { useState, useEffect } from 'react';

import DefaultTemplate from './components/templates/DefaultTemplate';
import Loader from './components/molecules/Loader/Loader';

function App() {
  const [loader, setLoader] = useState(true);
  const fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 666));
  };
  useEffect(() => {
    fakeRequest().then(() => {
      if (loader) {
        setLoader(false);
      }
    });
  });
  if (loader) return <Loader></Loader>;
  if (!loader) return <DefaultTemplate></DefaultTemplate>;
}

export default App;
