import { ReactElement, useState } from 'react';
import { DeleteBin } from '../DeleteBin';
import './styles.scss';

interface ITodoListProps {
  todoList: string[];
  setTodoList: (list: string[]) => void;
}

const TodoList = ({ todoList, setTodoList }: ITodoListProps): ReactElement => {
  const [todoCompleted, setTodoCompleted] = useState<string[]>([]);

  const removeTodoFromList = (todo: string, list: string[]): string[] => {
    return list.filter((todoFilter) => todoFilter !== todo);
  };

  const handleDelete = (todo: string) => {
    setTodoList(removeTodoFromList(todo, todoList));
  };

  const handleDeleteCompleted = (todo: string) => {
    setTodoCompleted(removeTodoFromList(todo, todoCompleted));
  };

  const handleCompleted = (todo: string) => {
    setTodoList(removeTodoFromList(todo, todoList));

    const newTodoCompleted = [...todoCompleted, todo];

    setTodoCompleted(newTodoCompleted);
  };

  const handleList = (todo: string) => {
    setTodoCompleted(removeTodoFromList(todo, todoCompleted));

    const newTodoList = [...todoList, todo];

    setTodoList(newTodoList);
  };

  return (
    <div className="todo-list-container">
      <h4>List</h4>

      <div className="todo-list">
        {todoList?.map((todo: string, index: number) => (
          <div className="task" key={`todo-${index}`}>
            <div className="task-content">
              <input type="checkbox" checked={false} onChange={() => handleCompleted(todo)} />

              <span className="task-name">{todo}</span>
            </div>

            <button className="delete-task-button" onClick={() => handleDelete(todo)}>
              <DeleteBin color="#ffffff" />
            </button>
          </div>
        ))}

        {(!todoList || !todoList?.length) && <p className="no-data">Congratulations! 🎉 No tasks to complete</p>}
      </div>

      <br />

      <h4>Completed</h4>

      <div className="todo-list">
        {todoCompleted?.map((todo: string, index: number) => (
          <div className="task" key={`todo-${index}`}>
            <div className="task-content">
              <input type="checkbox" checked={false} onChange={() => handleList(todo)} />

              <span className="task-name">{todo}</span>
            </div>

            <button className="delete-task-button" onClick={() => handleDeleteCompleted(todo)}>
              <DeleteBin color="#ffffff" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
