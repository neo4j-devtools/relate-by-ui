// default renderers
export { default as BodyRow } from './body-row';
export { default as BodyCell } from './body-cell';
export { default as Filter } from './filter';
export { default as ExpandedRow } from './expanded-row';

// cell values
export { default as JSONCell } from './cells/json-cell';
export { default as DateCell } from './cells/date-cell';
export { default as NumberCell } from './cells/number-cell';
export { default as TextCell } from './cells/text-cell';

// filters
export { default as TextFilter } from './filters/text-filter';

// aggregates
export { default as ValueAggregate } from './aggregates/value-aggregate';

export interface ICellProps {
  cell: any; // react-table cell
}

export interface IRowProps {
  row: any; // react-table row
  rowNumber: number;
  loading?: boolean;
}

export interface IFilterFieldProps {
  column: any; // react-table column
  onChange: (val: any) => void;
}
