export interface IFilterFieldProps {
  column: any; // react-table column
  onChange: (val: any) => void;
}

export {default as DefaultFilter} from './default-filter';
