import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButtonPropTypes } from '.';

const ButtonDestructiveText = (props: RelateByUIButtonPropTypes) => {
  const newProps: RelateByUIButtonPropTypes = { ...props };

  newProps.secondary = true;
  newProps.negative = true;
  newProps.basic = true;
  newProps.color = 'red';
  newProps.className = 'text';

  if (newProps.showIcon || newProps.icon) {
    newProps.icon = newProps.icon ? newProps.icon : 'dismiss';
  }

  // Custom styles if needed
  const StyledButton = styled(Button)`
    .ui.basic.red.relate-by-ui-button& {
      box-shadow: 0px 0px 0px 1px transparent inset !important;
      &:hover,
      &:focus {
        box-shadow: 0px 0px 0px 1px transparent inset !important;
      }
    }
  `;

  return <StyledButton {...newProps} />;
};

export default ButtonDestructiveText;
