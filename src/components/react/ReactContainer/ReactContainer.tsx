import { useState } from 'react';
import { AddTodo } from '../AddTodo';
import { TodoList } from '../TodoList';

import './styles.scss';
import {Footer} from "../Footer";

const ReactContainer = () => {
  const [todoList, setTodoLit] = useState<string[]>(['uno', 'dos', 'tres', 'cuatro']);

  return (
    <div className="container">
      <AddTodo todoList={todoList} setTodoList={setTodoLit} />

      <TodoList todoList={todoList} setTodoList={setTodoLit} />

      <Footer />
    </div>
  );
};

export default ReactContainer;
