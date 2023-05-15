import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import InputTodo from '@/components/InputTodo';
import TodoList from '@/components/TodoList';
import { getTodoList } from '@/api/todo';
import * as S from './style';

const Main = () => {
  const [todoListData, setTodoListData] = useState<TodoType[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, []);

  return (
    <S.Container>
      <S.Inner>
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </S.Inner>
    </S.Container>
  );
};

export default Main;
