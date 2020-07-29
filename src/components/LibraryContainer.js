import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {libraryAsyncAction, booksPopulateAction, isPopupOpenAction} from './../redux';
import ModelWidget from './Common/ModelWidget';
import Book from './Common/Book';

//LibraryContainer.propTypes = {};

class LibraryContainer extends React.Component {

    constructor(props) {
        super(props)    
        this.state = {
            isOpen: false
        }
    }

    componentDidMount() {
        //console.log("LibraryContainer useEffect ",this.props)
        this.props.triggerLibraryAsyncCall();
    }

    toggleModal = () => {
        this.props.isPopupOpenAction(false);
    }

    funcOpenPopup = (books) => {
        console.log("funcOpenPopup ",books)
        this.props.booksPopulateAction(books);
        this.props.isPopupOpenAction(true);         
    }
    
    render() {

        const{library, isPopupOpen} = this.props;
        const{isOpen} = this.state;
        console.log("library ",library)

        //return <div>Hi...</div>;
        return (
            <div>
                {library.loading ? 'Loading' : 
                    library.error ? library.error : (
                        <div>
                            <h2>Library List</h2>
                                {library.libraryList && library.libraryList.map( l => <p key={l.id} onClick={()=>this.funcOpenPopup(l.books)}>{l.name}</p>) }
                        </div>   
                    )        
                }
                <ModelWidget show={isPopupOpen} onClose={this.toggleModal}><Book/></ModelWidget>
            </div>
        );
    }
}

/*function LibraryContainer(props) {

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
            <ModelWidget show={true} onClose={this.toggleModal}>This is Test</ModelWidget>
        </div>
    );
}*/

const mapsStateToProps = (state) => {
    return {
        library : state.library,
        isPopupOpen : state.library.isPopupOpen
    }
}

const mapsDispatchToProps = (dispatch) => {
    return {
        triggerLibraryAsyncCall : () => dispatch(libraryAsyncAction()),
        isPopupOpenAction : (flag) => dispatch(isPopupOpenAction(flag)),
        booksPopulateAction : (books) => dispatch(booksPopulateAction(books)),
        
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(LibraryContainer);