import styled from '@emotion/styled';

export const StyledButton = styled.button<{
  backgroundColor: string;
  submitTextColor?: string;
  styleOverrides?: string;
}>`
  width: 456px;
  height: 56px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weigth: 600;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.submitTextColor || 'white'};
  ${(props) => props.styleOverrides}
`;

interface StyledInputProps {
  styledOverrides?: string;
}

export const FlexRow = styled.div<StyledInputProps>`
  display: flex;
  justify-content: center;
  ${(props) => props.styledOverrides}
`;
