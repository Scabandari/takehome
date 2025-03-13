import styled from '@emotion/styled';
import { useState } from 'react';
import { useClickAway } from '@uidotdev/usehooks';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DotsButton = styled.button<{ isOpen?: boolean }>`
  background-color: transparent;
  ${(props) => (props.isOpen ? 'background-color: #BFE7EE;' : null)}
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &::after {
    content: '⋮';
    font-size: 20px;
    line-height: 1;
    font-weight: 800;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  background-color: #ffffff;
  width: 154px;
  min-width: 64px;
  max-height: 240px;
  box-shadow: 0px 8px 20px 0px #dfe0dc80;
  z-index: 1;
  border-radius: 8px;
  border: 3px solid #585b52;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: 0%;
  vertical-align: middle;
  color: #44463f;
`;

const DropdownItem = styled.div<{ color?: string }>`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #44463f;
  ${(props) => (props.color ? `color: ${props.color};` : null)}
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
    border-radius: 8px;
  }
`;

interface DropdownProps {
  userId: number;
  onEdit: (userId: number) => void;
  onDelete: (userId: number) => void;
}

const Dropdown = ({ userId, onEdit, onDelete }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  return (
    <DropdownContainer ref={ref as any}>
      <DotsButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <DropdownMenu>
          <DropdownItem
            onClick={() => {
              onEdit(userId);
              setIsOpen(false);
            }}
          >
            Manage Member
          </DropdownItem>
          <DropdownItem
            color='#CC1C1C'
            onClick={() => {
              onDelete(userId);
              setIsOpen(false);
            }}
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
