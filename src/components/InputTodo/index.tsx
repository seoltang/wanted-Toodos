import { useCallback, useState } from 'react';
import { createTodo } from '@/api/todo';
import * as S from './style';
import Dropdown from './Dropdown';

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      try {
        event.preventDefault();
        setIsLoadingSubmit(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert('Please write something');
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodos((prev) => [...prev, data]);
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setInputText('');
        setIsLoadingSubmit(false);
      }
    },
    [inputText, setTodos],
  );

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.SearchIcon />
      <S.InputText
        placeholder="Add new todo..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setIsDropdownOpen(false)}
        disabled={isLoadingSubmit}
        autoFocus={true}
      />
      {isLoadingSubmit ? (
        <S.SubmitSpinner />
      ) : (
        <S.SubmitButton type="submit">
          <S.PlusIcon />
        </S.SubmitButton>
      )}

      <Dropdown isDropdownOpen={isDropdownOpen} inputText={inputText} />
    </S.Form>
  );
};

export default InputTodo;
