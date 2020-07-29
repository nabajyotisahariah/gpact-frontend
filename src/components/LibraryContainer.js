import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {libraryAsyncAction} from './../redux'

LibraryContainer.propTypes = {};

function LibraryContainer(props) {

    console.log("LibraryContainer ",props)

    useEffect( () => {
        console.log("LibraryContainer useEffect ",props)
        props.triggerLibraryAsyncCall();
    }, []);
    
    return (
        <div>
            {props.library.loading ? 'Loading' : 
                props.library.error ? props.library.error : (
                    <div>
                        <h2>Library List</h2>
                            {props.library.data && props.library.data.map( l => <p key={l.id}>{l.name}</p>) }
                     </div>   
                )        
            }
        </div>
    );
}

const mapsStateToProps = (state) => {
    return {
        library : state.library
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        triggerLibraryAsyncCall : () => dispatch(libraryAsyncAction())
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(LibraryContainer);