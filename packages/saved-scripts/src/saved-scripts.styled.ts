import styled from '@emotion/styled';

export const SavedScriptsMain = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Static content
 */
export const SavedScriptsBody = styled.div`
  padding: 0 24px;
  flex: 1;
`;

export const SavedScriptsBodySection = styled.div`
  margin-bottom: 12px;
`;

export const SavedScriptsHeader = styled.h5`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #424650;
  font-size: 14px;
  margin-bottom: 12px;
  line-height: 39px;
  position: relative;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 1px 0px;
`;

export const SavedScriptsListItemMain = styled.div`
  padding: 5px 3px;
  display: flex;
  justify-content: space-between;
  
  &:hover {
    color: inherit;
  }
  
  &:hover .saved-scripts__edit-button {
    visibility: visible;
  }
`;

export const SavedScriptsListItemDisplayName = styled.div`
  flex: 1;
  user-select: none;
  cursor: pointer;
  color: #bcc0c9;
  font-size: 13px;
  padding: 1px 0;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color ease-in-out 0.3s;
  
  &:hover {
    color: inherit;
  }
`;

export const SavedScriptsFolderMain = styled.div`
  padding-bottom: 16px;
`;

export const SavedScriptsFolderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  
  &:hover .saved-scripts__edit-button {
    visibility: visible;
  }
`;

export const SavedScriptsFolderBody = styled.div`
  margin-left: 15px;
`;

export const SavedScriptsFolderLabel = styled.div`
  flex: 1;
  margin-right: 10px;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SavedScriptsFolderCollapseIcon = styled.span`
  margin-right: 10px;
  width: 8px;
  display: inline-block;
`;

/**
 * Buttons
 */
export const SavedScriptsButtonWrapper = styled.div`
  min-width: 21px;
  
  > button:not(:last-of-type) {
    margin-right: 5px;
  }
`;

export const SavedScriptsButton = styled.button`
  color: #bcc0c9;
  background: transparent;
  border: none;
  outline: none;
  padding: 3px;
  transition: color ease-in-out 0.3s;
  cursor: pointer;
  
  &:hover {
    color: inherit;
  }
`;

export const SavedScriptsNewFolderButtonButton = styled(SavedScriptsButton)`
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SavedScriptsEditButtonButton = styled(SavedScriptsButton)`
  min-width: 26px;
  visibility: hidden;
`;

/**
 * Input fields
 */
export const SavedScriptsInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-weight: normal;
  margin-right: 5px;
`;
