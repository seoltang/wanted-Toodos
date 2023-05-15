import { FaTrash } from 'react-icons/fa';
import { styled } from 'styled-components';

export const TodoItem = styled.li`
  padding: 17px 1.5rem;
  border-bottom: 1px solid #eaeaea;
  font-size: 1.2rem;
  letter-spacing: 1.5px;

  &:hover {
    opacity: 0.85;
    background-color: #eaeaea;
  }
`;

export const ItemOption = styled.div`
  float: right;
`;

export const TrashButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const TrashIcon = styled(FaTrash)`
  color: orangered;
  font-size: 16px;
`;
