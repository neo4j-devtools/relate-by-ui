import styled from '@emotion/styled';

export const StyleWrapper = styled.div`
   margin-bottom: 1em;
    
  .relatable__table {
    position: relative;
  }
  
  .relatable__table-header-cell {
    position: sticky;
    top: 0;
  }
  
  .relatable__table-row-number {
    user-select: none;
  }
  
  /* @todo: move this? */
  .relatable__table-json-cell {
    margin: 0;
  }
  
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
