import React from 'react';
import Button from './ButtonTemplate';
import { UIButtonPropTypes } from './Types';

const ButtonDismiss = ({ title, onClick, loading, showIcon }: UIButtonPropTypes) => {
  const props: UIButtonPropTypes = {
    title,
    className: 'secondary',
    onClick,
    loading,
    negative: true,
  };

  if (showIcon) {
    props.icon = 'dismiss';
  }

  return <Button {...props} />;
};

export default ButtonDismiss;
