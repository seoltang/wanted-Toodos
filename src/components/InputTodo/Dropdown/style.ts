import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { styled } from 'styled-components';
import { flexCustom } from '@/styles/common';
import { fontStyle } from '../style';

export const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 50px;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  width: 100%;
  max-height: 188px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 1px rgba(50, 50, 50, 0.05),
    0px 2px 4px rgba(50, 50, 50, 0.1);
  overflow-y: auto;
  z-index: 1;
`;

export const AutocompleteList = styled.ul`
  ${flexCustom('column', 'flex-start', 'flex-start')}
  width: 100%;
`;

export const AutocompleteItem = styled.li`
  width: 100%;
  padding: 6px 12px;
  border-radius: 3px;
  text-align: left;
  ${fontStyle}
  white-space: nowrap;
  overflow-x: hidden;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[100]};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.green[100]};
  }
`;

export const ColoredText = styled.span`
  color: ${({ theme }) => theme.color.green[500]};
`;

export const IconWrapper = styled.div`
  margin: 4px auto 0;
  text-align: center;
`;

export const ViewMoreIcon = styled(HiOutlineDotsHorizontal)`
  color: ${({ theme }) => theme.color.gray[600]};
  font-size: 20px;
`;
