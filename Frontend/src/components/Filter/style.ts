import styled from 'styled-components';

export const DropdownLabel = styled.label``;

export const DropDown = styled.input<{
  constentsName: string;
  labelName: string;
}>`
  visibility: hidden;
  position: absolute;
  :checked
    + .${({ labelName }) => labelName}
    + .${({ constentsName }) => constentsName} {
    display: block;
    border-top: 1px solid ${({ theme }) => theme.colors.greyScale.line};
  }
`;

export const DropDownTitle = styled.div<{
  isMouseOvered: boolean;
}>`
  width: 100%;
  height: 100%;
  color: ${({ theme, isMouseOvered }) =>
    isMouseOvered ? theme.colors.greyScale.body : theme.colors.greyScale.label};
`;

export const Filter = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-around')};
`;

export const IconContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')};
  padding-top: 10px;
`;