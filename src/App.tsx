import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layouts';
import Store from './store';
import { Provider } from 'mobx-react';

function App() {
  const store: Store = new Store();

  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
      <GlobalStyles />
    </>
  );
}

export default App;
