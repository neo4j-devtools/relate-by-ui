import React from 'react'
import { FormInput } from '@relate-by-ui/form-elements';

export default function DefaultFilter({
  column: { Header },
  onFilterSet,
}: any) {
  return (
    <FormInput
      onChange={({target}) => onFilterSet(target.value || undefined)}
      placeholder={`Search ${Header}...`}
    />
  );
}
