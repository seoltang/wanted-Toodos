import { useCallback, useState } from 'react';
import { createTodo } from '@/api/todo';
import useDebounce from '@/hooks/useDebounce';
import * as S from './style';
import Dropdown from './Dropdown';

type InputTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const debouncedInputText = useDebounce(inputText, 500);

  const handleSubmit = useCallback(
    async (input: string) => {
      try {
        setIsLoadingSubmit(true);

        const trimmed = input.trim();
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

    [setTodos],
  );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(debouncedInputText);
  };

  return (
    <S.Form onSubmit={onSubmit}>
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

      <Dropdown
        isDropdownOpen={isDropdownOpen}
        inputText={debouncedInputText}
        setInputText={setInputText}
        handleSubmit={handleSubmit}
      />
    </S.Form>
  );
};

export default InputTodo;
