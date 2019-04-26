import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButton } from './Types';

const ButtonDestructivePrimary = (props: RelateByUIButton) => {
  const newProps: RelateByUIButton = { ...props };

  newProps.primary = true;
  newProps.positive = true;
  newProps.color = 'red';

  if (newProps.showIcon || newProps.icon) {
    newProps.icon = newProps.icon ? newProps.icon : 'dismiss';
  }

  // Custom styles if needed
  const StyledButton = styled(Button)``;

  return <StyledButton {...newProps} />;
};

export default ButtonDestructivePrimary;
