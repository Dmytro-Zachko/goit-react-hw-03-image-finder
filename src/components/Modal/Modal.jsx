import React, { Component } from "react";
import { Modall, Overlay } from "./Modal.styled";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {
  static propTypes = {
    onLoad: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    image: PropTypes.shape({
        link: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      }).isRequired,
    
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    const { target, currentTarget } = event;

    if (target.value === currentTarget.value) {
      this.props.onClose();
    }
  };

  render() {
    const { link, alt } = this.props.image;
    const { onLoad } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modall>
          <img src={link} alt={alt} onLoad={() => onLoad()} />
        </Modall>
      </Overlay>,
      modalRoot
    );
  }
}