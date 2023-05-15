import { useCallback, useState } from 'react';
import { deleteTodo } from '@/api/todo';
import { Spinner } from '@/styles/common';
import * as S from './style';

type TodoItemProps = {
  id: string;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const TodoItem = ({ id, title, setTodos }: TodoItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodos((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <S.TodoItem>
      <span>{title}</span>
      <S.ItemOption>
        {!isLoading ? (
          <S.TrashButton onClick={() => handleRemoveTodo()}>
            <S.TrashIcon />
          </S.TrashButton>
        ) : (
          <Spinner />
        )}
      </S.ItemOption>
    </S.TodoItem>
  );
};

export default TodoItem;
