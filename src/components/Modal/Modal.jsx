// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeydown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeydown);
//   }
//   handleKeydown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return (
//       <>
//         <div className="overlay" onClick={this.handleBackdropClick}>
//           <div className="modal">
//             <img src={this.modalImg} alt="" />
//           </div>
//         </div>
//         , modalRoot
//       </>
//     );
//   }
// }
