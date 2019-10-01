import React from 'react'
import { FormInput } from '@relate-by-ui/form-elements';

import { IFilterFieldProps } from '../index';

export default function TextFilter({
  column: { Header },
  onChange,
}: IFilterFieldProps) {
  return (
    <FormInput
      input={{autoFocus: true}}
      onChange={({target}) => onChange(target.value || undefined)}
      placeholder={`Filter ${Header}...`}
    />
  );
}
