import React, {useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import CakeContainerHooks from './components/redux/CakeContainerHooks';
import IceCreamContainer from './components/IceCreamContainer';
import UserComponent from './components/redux/UserComponent';
import LibraryContainer from './components/LibraryContainer';
import themes from './components/context/theme';
import ThemeContext from './components/context/ThemeContext';
import Toolbar from './components/context/Toolbar';
import ErrorBoundary from './components/error/ErrorBoundary';
import LibraryContainerHooks from './components/LibraryContainerHooks';
import MouseContainer from './components/MouseContainer';
import ParentComponents from './components/memo/ParentComponents';
import FocusInput from './components/useRef/FocusInput';
import CounterOne from './components/customHook/CounterOne';
import CounterTwo from './components/customHook/CounterTwo';
import Search from './components/hookAsyncWait/Search';
import Modal from './components/portal/Modal';

//rfce - sniffet
export const UserContext  = React.createContext();
export const ChannelContext  = React.createContext();

function App() {

  const intialCount = 1
  const [count, setCount]  = useState(intialCount);
  const [showModal, setShowModal] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
            <UserContext.Provider value={"NabaContext "+count}>
                <ChannelContext.Provider value={"SahaContext"+count}>
                  <MouseContainer/> 
                </ChannelContext.Provider>
            </UserContext.Provider>
            <button onClick={ () => setCount(count+1)}>Context Test</button>
            <ParentComponents/>
            <FocusInput/>
            <br/>Reuse components....
            <CounterOne/>
            <CounterTwo/>
            <br/>Redux Async 
            <CakeContainerHooks />
            <ErrorBoundary>
              <UserComponent/>
            </ErrorBoundary>  

            <br/>Search 
            <Search/>
            <br/>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            {showModal ? <Modal>
              <div className="modal">
                <div>
                  <div onClick={() => setShowModal(false)}>Close Me</div>
                  With a portal, we can render content into a different
                  part of the DOM, as if it were any other React child.
                </div>
                This is being rendered inside the #modal-container div.
              
              </div>
          </Modal> : null}
         {/*<CakeContainer/>      
          <ErrorBoundary>
              <CakeContainerHooks/>  
          </ErrorBoundary>
            
          <IceCreamContainer/>
          
           <LibraryContainer/>
          <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>

        */}
        </header>
      </div>
    </Provider>
  );
}

export default App;
