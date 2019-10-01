import styled from '@emotion/styled';
import { join } from 'lodash-es';
import {
  createColumnStateClasses,
  createRowStateClasses,
  createToolbarStateClasses,
} from '../../utils/relatable-state-classes';

export const StyleWrapper = styled.div`
  .relatable__table {
    position: relative;
  }
  
  .relatable__table-header-cell {
    position: sticky;
    top: 0;
  }
  
  .relatable__table-row-actions {
    display: none;
  }
  
  .relatable__table-row-actions-cell {
    user-select: none;
    width: 50px;
  }
  
  .relatable__table-row-actions-cell:hover .relatable__table-row-actions {
    display: initial;
  }
  
  .relatable__table-row-actions-cell:hover .relatable__table-row-actions ~ .relatable__table-row-number {
    display: none;
  }
  
  .relatable__row-expander {
    cursor: pointer;
    padding: 2px;
  }
  
  .relatable__table-json-cell {
    margin: 0;
  }
  
  .menu.icon.ui .icon.relatable__toolbar-icon {
    margin-right: .8em;
  }
  
  ${join(createToolbarStateClasses(), '\n\n')}
  ${join(createColumnStateClasses(), '\n\n')}
  ${join(createRowStateClasses(), '\n\n')}
  
  .relatable__table-body-cell-loader {
    height: 18px;
    width: 75%;
    display: block;
    background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
    background-size: 500px 100px;
    animation-name: relatable__table-moving-gradient;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  
  .relatable__table-body-row:nth-of-type(even) .relatable__table-body-cell-loader {
    width: 70%;
  }
  
  @-webkit-keyframes relatable__table-moving-gradient {
    0% { background-position: -250px 0; }
    100% { background-position: 250px 0; }
  }
`;
