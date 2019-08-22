import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { RelateByUIDropdownPropTypes, RelateByUIDropdownItemPropTypes } from '.';

const DropdownExampleDropdown = (props: RelateByUIDropdownPropTypes) => {
  const {title, items} = props;
  return (<Dropdown text={title}>
    <Dropdown.Menu>
      {
        items.map((item: RelateByUIDropdownItemPropTypes): any => {
          if (!Object.keys(item).length) {
            return (<Dropdown.Divider />);
          }

          if (item.text) {
            return (<Dropdown.Item {...item} />);
          }
        })
      }
    </Dropdown.Menu>
  </Dropdown>);
}

export default DropdownExampleDropdown
