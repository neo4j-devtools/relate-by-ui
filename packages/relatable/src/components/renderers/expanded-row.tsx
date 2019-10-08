import React, { useMemo } from 'react';
import { map } from 'lodash-es';

import { useRelatableStateContext } from '../../states';

import { IRowProps } from './index';
import Relatable from '../relatable/relatable';

export default function ExpandedRow({ row }: IRowProps): JSX.Element {
  const { _originalColumns } = useRelatableStateContext();
  const data = useMemo(() => map(row.subRows, 'original'), [row]);

  return (
    <Relatable
      className="relatable__expanded-row-table"
      compact
      columns={_originalColumns}
      data={data}/>
  );
}
