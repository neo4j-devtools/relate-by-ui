import React from 'react';
import Button from './ButtonTemplate';
import { UIButtonPropTypes } from './Types';

const ButtonConfirm = ({ title, onClick, loading, showIcon }: UIButtonPropTypes) => {
  const props: UIButtonPropTypes = {
    title,
    className: 'primary',
    onClick,
    loading,
    positive: true,
  };

  if (showIcon) {
    props.icon = 'confirm';
  }

  return <Button {...props} />;
};

export default ButtonConfirm;
