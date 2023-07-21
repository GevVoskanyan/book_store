import React from 'react';
import Header from 'components/layouts/Header/Header';
import AppRoutes from 'constants/Routes/Routes';

function App(props) {
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
