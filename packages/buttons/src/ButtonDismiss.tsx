import React from 'react';
import Button from './ButtonTemplate';
import { RelateByUIButton } from './Types';

const ButtonDismiss = ({ title, onClick, loading, showIcon }: RelateByUIButton) => {
  const props: RelateByUIButton = {
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
