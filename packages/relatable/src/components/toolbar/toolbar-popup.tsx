import React from 'react';
import { Popup } from 'semantic-ui-react';

export function ToolbarPopup({ children = null, contents, name, selectedToolbar, ...rest }: any) {
  const isOpen = selectedToolbar === name;

  return <Popup
    {...rest}
    on="click"
    open={isOpen}
    position="bottom left"
    children={contents}
    trigger={children}/>;
}
