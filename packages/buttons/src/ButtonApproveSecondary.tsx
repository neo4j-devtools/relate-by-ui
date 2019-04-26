import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButton } from './Types';

const ButtonApproveSecondary = (props: RelateByUIButton) => {
  const newProps: RelateByUIButton = { ...props };

  newProps.secondary = true;
  newProps.positive = true;
  newProps.basic = true;
  newProps.color = 'blue';

  if (newProps.showIcon || newProps.icon) {
    newProps.icon = newProps.icon ? newProps.icon : 'confirm';
  }

  // Custom styles if needed
  const StyledButton = styled(Button)``;

  return <StyledButton {...newProps} />;
};

export default ButtonApproveSecondary;
