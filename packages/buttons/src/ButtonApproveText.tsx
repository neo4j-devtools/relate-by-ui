import React from 'react';
import styled from '@emotion/styled';
import Button from './ButtonTemplate';
import { RelateByUIButton } from './Types';

const ButtonApproveText = (props: RelateByUIButton) => {
  const newProps: RelateByUIButton = { ...props };

  newProps.secondary = true;
  newProps.positive = true;
  newProps.basic = true;
  newProps.color = 'blue';
  newProps.className = 'text';

  if (newProps.showIcon || newProps.icon) {
    newProps.icon = newProps.icon ? newProps.icon : 'confirm';
  }

  // Custom styles if needed
  const StyledButton = styled(Button)`
    .ui.basic.blue.relate-by-ui-button& {
      box-shadow: 0px 0px 0px 1px transparent inset !important;
      &:hover,
      &:focus {
        box-shadow: 0px 0px 0px 1px transparent inset !important;
      }
    }
  `;

  return <StyledButton {...newProps} />;
};

export default ButtonApproveText;
