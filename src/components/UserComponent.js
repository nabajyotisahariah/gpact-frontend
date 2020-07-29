import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {asyncRequestAction} from './../redux'
//import {asyncRequestAction} from './../redux/users/UserAction'; 

UserComponent.propTypes = {
    
};

function UserComponent(props) {

    console.log(" UserComponent ",props)
    useEffect( () => {
        console.log(" UserComponent useEffect ",props)
        props.asyncRequestAction();
    }, []);
    console.log("UserComponent.user ",props)
    return (
        <div>
            {props.users.loading ? 'Loading' : 
                props.users.error ? props.users.error : (
                    <div>
                        <h2>User List</h2>
                            {props.users.data && props.users.data.map( user => <p key={user}>{user}</p>) }
                     </div>   
                )        
            }
        </div>
    );
}

const mapsStateToProps = (state) => {
    return {
        users : state.users
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        asyncRequestAction : () => dispatch(asyncRequestAction())
    }
}
export default connect(mapsStateToProps,mapsDispatchToProps)(UserComponent);