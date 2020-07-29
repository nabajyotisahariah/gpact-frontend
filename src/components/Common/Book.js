import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

//const Book = () => <div>Book</div>
//export default Book;

class Book extends Component {

    render() {

        //console.log(" === ",this.props.booksList)
        return (<div style={{"background-color": "white", "height": "300px", "width": "300px", "color": "black", "margin-top": "100px", "margin-left": "20px;"}}>
            
            { this.props.booksList.length > 0 ?
                (<div>
                    <h4>Books in the Library : </h4> 
                    <br/><br/>
                    {
                        this.props.booksList.map( (book, i) => (
                            (<div> {book.id} = ||| == {book.name}</div>)
                        ))
                    }
                </div>) 
                : <div>No Books</div>
            }
        </div>  )      
    }
}
const mapStatetoProp = (state) => ({
    booksList : state.user.booksList
  });
  
  const mapDispatchToProps = (dispatch) => ({    
  });

  export default connect(mapStatetoProp, mapDispatchToProps)(Book);