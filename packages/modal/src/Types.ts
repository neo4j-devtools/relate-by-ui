import { ModalProps } from 'semantic-ui-react';

export interface RelateByUIModal {
  className?: string;
  title: string;
  icon?: string;
  contentClassName?: string;
  scrolling?: boolean;
  children?: any[] | any;
  checkbox?: any[] | any;
  buttons?: any[] | any;
  semanticModal: ModalProps;
}
