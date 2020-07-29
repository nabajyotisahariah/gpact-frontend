import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import CakeContainerHooks from './components/CakeContainerHooks';
import IceCreamContainer from './components/IceCreamContainer';
import UserComponent from './components/UserComponent';
import LibraryContainer from './components/LibraryContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/*<CakeContainer/>      
          <CakeContainerHooks/>  
          <IceCreamContainer/>
          <UserComponent />*/}
          <LibraryContainer/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
