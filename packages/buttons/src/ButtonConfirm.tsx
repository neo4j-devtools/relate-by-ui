import React from 'react';
import Button from './ButtonTemplate';
import { RelateByUIButton } from './Types';

const ButtonConfirm = ({ title, onClick, loading, showIcon }: RelateByUIButton) => {
  const props: RelateByUIButton = {
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
