import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButton } from './Types';

const ButtonDismiss = (props: RelateByUIButton) => {
  const newProps: RelateByUIButton = { ...props };

  newProps.className = 'secondary';
  newProps.negative = true;

  if (newProps.showIcon) {
    newProps.icon = 'dismiss';
  }

  const StyledButton = styled(Button)`
    background-color: #ff6769;

    &:hover,
    &:focus {
      background-color: #ff6769;
    }
  `;

  return <StyledButton {...newProps} />;
};

export default ButtonDismiss;
