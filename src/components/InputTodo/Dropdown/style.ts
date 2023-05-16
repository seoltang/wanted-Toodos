import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { styled } from 'styled-components';
import { Spinner, flexCustom } from '@/styles/common';
import { fontStyle } from '../style';

export const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 50px;
  width: 100%;
  max-height: ${({ $isOpen }) => ($isOpen ? '188px' : '0')};
  padding: ${({ $isOpen }) => ($isOpen ? '9px' : '0')} 5px;
  border: ${({ $isOpen }) => ($isOpen ? '1px' : '0')} solid
    ${({ theme }) => theme.color.gray[300]};
  border-radius: 5px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 1px rgba(50, 50, 50, 0.05),
    0px 2px 4px rgba(50, 50, 50, 0.1);
  overflow-y: auto;
  z-index: 1;
  transition: max-height 200ms cubic-bezier(0.22, 0.61, 0.36, 1),
    padding 200ms cubic-bezier(0.22, 0.61, 0.36, 1),
    border 200ms cubic-bezier(0.22, 0.61, 0.36, 1);
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

export const ViewMoreIcon = styled(HiOutlineDotsHorizontal)`
  display: block;
  margin: 4px auto 0;
  color: ${({ theme }) => theme.color.gray[600]};
  font-size: 20px;
`;

export const ScrollSpinner = styled(Spinner)`
  display: block;
  margin: 4px auto 0;
`;
