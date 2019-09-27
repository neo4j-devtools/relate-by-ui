import React, { PropsWithChildren } from 'react';
import { Popup } from 'semantic-ui-react';

export function ToolbarPopup({ children = null, content, name, selectedToolbarAction, ...rest }: PropsWithChildren<any>) {
  const isOpen = selectedToolbarAction && selectedToolbarAction.name === name;

  return <Popup
    {...rest}
    on="click"
    open={isOpen}
    position="bottom left"
    children={content}
    trigger={children}/>;
}
