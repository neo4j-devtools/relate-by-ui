import { StrictFormInputProps, StrictFormTextAreaProps, StrictFormSelectProps } from 'semantic-ui-react';

export interface RelateByUIInputPropTypes extends StrictFormInputProps {
  placeholder?: string;
}

export interface RelateByUITextAreaPropTypes extends StrictFormTextAreaProps {
  placeholder?: string;
}

export interface RelateByUISelectPropTypes extends StrictFormSelectProps {
  placeholder?: string;
}
