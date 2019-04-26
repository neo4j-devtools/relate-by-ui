import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButton } from './Types';

const ButtonDismissText = (props: RelateByUIButton) => {
  const newProps: RelateByUIButton = { ...props };

  newProps.secondary = true;
  newProps.negative = true;
  newProps.basic = true;

  if (newProps.showIcon || newProps.icon) {
    newProps.icon = newProps.icon ? newProps.icon : 'dismiss';
  }

  // Custom styles if needed
  const StyledButton = styled(Button)`
    border: 1px solid transparent !important;
  `;

  return <StyledButton {...newProps} />;
};

export default ButtonDismissText;
