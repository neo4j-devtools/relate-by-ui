import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButtonPropTypes } from '.';

const ButtonDismissSecondary = (props: RelateByUIButtonPropTypes) => {
  const newProps: RelateByUIButtonPropTypes = { ...props };

  newProps.secondary = true;
  newProps.negative = true;
  newProps.basic = true;

  if (newProps.showIcon || newProps.icon) {
    newProps.icon = newProps.icon ? newProps.icon : 'dismiss';
  }

  const StyledButton = styled(Button)`
    .ui.relate-by-ui-button& {
      font-weight: 600;
    }
  `;

  return <StyledButton {...newProps} />;
};

export default ButtonDismissSecondary;
