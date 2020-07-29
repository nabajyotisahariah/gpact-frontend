import React from 'react';
import PropTypes from 'prop-types';

class ModalWidget extends React.Component {

  render() {

    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 0,
      "z-index": 1000
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal">            
            <button onClick={this.props.onClose}>Close</button>            
            {this.props.children}          
        </div>
      </div>
    );
  }
}

ModalWidget.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalWidget;
