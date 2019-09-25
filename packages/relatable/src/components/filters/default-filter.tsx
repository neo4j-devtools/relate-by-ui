import React from 'react'
import { FormInput } from '@relate-by-ui/form-elements';

import { IFilterFieldProps } from './index';

export default function DefaultFilter({
  column: { Header },
  onChange,
}: IFilterFieldProps) {
  return (
    <FormInput
      onChange={({target}) => onChange(target.value || undefined)}
      placeholder={`Filter ${Header}...`}
    />
  );
}
