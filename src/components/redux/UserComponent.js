import React, {useEffect, useState} from 'react';
import {connect, useSelector, useDispatch, useStore } from 'react-redux';
import PropTypes from 'prop-types';
import {asyncRequestAction} from '../../redux'

function UserComponent() {
    const [count, setCount] = useState(0);
    const users   = useSelector( state  => state.users);
    const dispatch = useDispatch();
    const store  = useStore ();

    useEffect( () => {
        console.log(" UserComponent useEffect  -- ",JSON.stringify(store.getState()) ); 
        
        dispatch(asyncRequestAction ());
    }, []);

    useEffect(() => {
        // Update the document title using the browser API
        //try {
            console.log(`You clicked ${count} times`)
            if(count == 5) {
              console.log(`You clicked ${count} crashed `)
              throw new Error('I crashed!');
            }
        //}catch(e) {
        //    console.log("Error ",e.message)
        //}        
      });

    console.log("UserComponent.user ",users)

    
    return (        
        <div>
             <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                  Test Exception via Error Boundary
            </button>
            
            {users.loading ? 'Loading' : 
                users.error ? users.error : (
                    <div>
                        <h2>User List</h2>
                            {users.data && users.data.map( user => <p key={user}>{user}</p>) }
                     </div>   
                )        
            }
        </div>
    );
}
export default UserComponent;
/*const mapsStateToProps = (state) => {
    return {
        users : state.users
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        asyncRequestAction : () => dispatch(asyncRequestAction())
    }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(UserComponent);*/