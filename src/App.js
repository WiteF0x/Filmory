import React from 'react';
import { LogBox } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// import Loading from './Loading';

import store, { persistor } from './redux';
import RootNavigator from './navigation';

LogBox.ignoreAllLogs();

const App = () => (
  <Provider store={store} >
    <PersistGate
      persistor={persistor}
      loading={null}
    >
      {/* <Loading/> */}
      <RootNavigator />
    </PersistGate>
  </Provider>
);
export default App;

