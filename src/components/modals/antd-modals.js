import React from 'react';
import PropTypes, { object } from 'prop-types';
import { ModalStyled } from './styled';
import { Button } from '../buttons/buttons';

const Modal = props => {
  const { onCancel, className, onOk, visible, title, type, color, footer, width, children } = props;

  return (
    <ModalStyled
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      type={color ? type : false}
      width={width}
      className={className}
      footer={
        footer || footer === null
          ? footer
          : [
              <Button type="secondary" key="back" onClick={onCancel}>
                Cancel
              </Button>,
              <Button type={type} key="submit" onClick={onOk}>
                Save Change
              </Button>,
            ]
      }
    >
      {children}
    </ModalStyled>
  );
};

Modal.defaultProps = {
  width: 620,
  className: 'atbd-modal',
};

Modal.propTypes = {
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  visible: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  footer: PropTypes.arrayOf(object),
  width: PropTypes.number,
  color: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
};

const alertModal = ModalStyled;
export { Modal, alertModal };
