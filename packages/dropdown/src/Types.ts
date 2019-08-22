export interface RelateByUIDropdownItemPropTypes {
  text?: string;
  description?: string;
  icon?: string;
};

export interface RelateByUIDropdownPropTypes {
  title: string;
  items: RelateByUIDropdownItemPropTypes[];
};
