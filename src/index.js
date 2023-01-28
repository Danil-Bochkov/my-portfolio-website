import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
// import { HashRouter } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
          {/* <HashRouter> */}
          <App />    
          {/* </HashRouter>   */}
        {/* </PersistGate> */}
      {/* </Provider> */}  
    </BrowserRouter>
  </React.StrictMode>
);