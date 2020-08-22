import React , {useState} from 'react';
import LibraryContainerHooks from './LibraryContainerHooks';

function MouseContainer(props) {

    const [display, setDisplay]  = useState(true);
  

    return (
        <div>
             {display ? <LibraryContainerHooks/> : 'NA' }
            <button onClick={() =>setDisplay(false)}>Unmount Component </button>
        </div>
    );
}

export default MouseContainer;