import { ModalProps } from 'semantic-ui-react';

export interface RelateByUIModal {
  title: string;
  icon?: string;
  contentClassName?: string;
  scrolling?: boolean;
  children?: any[] | any;
  buttons?: any[] | any;
  semanticModal: ModalProps;
}
