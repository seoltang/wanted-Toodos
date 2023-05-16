import { css, styled } from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { Spinner, flexCustom } from '@/styles/common';

export const Form = styled.form`
  position: relative;
  ${flexCustom('row', 'center', 'space-evenly')}
  width: 100%;
  max-width: 580px;
  margin-bottom: 20px;
`;

export const SearchIcon = styled(BiSearch)`
  position: absolute;
  left: 13px;
  color: ${({ theme }) => theme.color.gray[700]};
  font-size: 20px;
`;

export const fontStyle = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-overflow: ellipsis;
  letter-spacing: 0.02em;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 12px 13px 12px 40px;
  border: 1px solid ${({ theme }) => theme.color.gray[300]};
  border-radius: 6px;
  background-color: transparent;
  ${fontStyle}

  &:hover {
    border: 1px solid transparent;
    outline: 3px solid ${({ theme }) => theme.color.gray[300]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.gray[600]};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray[600]};
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: -28px;
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    opacity: 0.5;
  }
`;

export const SubmitSpinner = styled(Spinner)`
  position: absolute;
  right: -28px;
`;

export const PlusIcon = styled(FaPlusCircle)`
  color: ${({ theme }) => theme.color.green[500]};
  font-size: 20px;

  :hover {
    opacity: 1;
  }
`;
