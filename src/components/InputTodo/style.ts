import { css, styled } from 'styled-components';
import { FaPlusCircle } from 'react-icons/fa';

export const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin-bottom: 20px;
  display: flex;
  border-radius: calc(0.5 * 100px);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.38);
  justify-content: space-evenly;
`;

const inputStyle = css`
  height: 45px;
  outline: none;
  border: none;
`;

export const InputText = styled.input`
  ${inputStyle}
  font-size: 1rem;
  font-weight: 400;
  width: 85%;
  padding-right: 5px;
  padding-left: 10px;
  border-radius: calc(0.5 * 100px);
  background-color: transparent;
`;

export const SubmitButton = styled.button`
  ${inputStyle}
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover {
    opacity: 0.5;
  }
`;

export const PlusIcon = styled(FaPlusCircle)`
  color: darkcyan;
  font-size: 20px;
`;
