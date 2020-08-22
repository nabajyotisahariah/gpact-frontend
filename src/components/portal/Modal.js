import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

function Modal(props) {

    let el = document.createElement('div');

    useEffect( () => {
        
        modalRoot.appendChild(el);

        return () => {
            modalRoot.removeChild(el);
        }
    }, [])

    return ReactDOM.createPortal(
        props.children,
        el
      );
}

export default Modal;
/*class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}
export default Modal;*/