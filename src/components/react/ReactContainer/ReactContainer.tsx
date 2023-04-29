import { useState } from 'react';
import { AddTodo } from '../AddTodo';
import { TodoList } from '../TodoList';

import './styles.scss';

const ReactContainer = () => {
  const [todoList, setTodoLit] = useState<string[]>(['uno', 'dos', 'tres', 'cuatro']);

  return (
    <div className="container">
      <AddTodo todoList={todoList} setTodoList={setTodoLit} />

      <TodoList todoList={todoList} setTodoList={setTodoLit} />
    </div>
  );
};

export default ReactContainer;
