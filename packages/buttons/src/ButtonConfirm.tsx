import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButton } from './Types';

const ButtonConfirm = (props: RelateByUIButton) => {
  const newProps: RelateByUIButton = { ...props };

  newProps.className = 'primary';
  newProps.positive = true;

  if (newProps.showIcon) {
    newProps.icon = 'confirm';
  }

  const StyledButton = styled(Button)`
    background-color: #6dce9c;

    &:hover,
    &:focus {
      background-color: #6dce9c;
    }
  `;

  return <StyledButton {...newProps} />;
};

export default ButtonConfirm;
