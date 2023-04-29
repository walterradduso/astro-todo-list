import { useState } from 'react';
import './styles.scss';

interface IAddTodoProps {
  todoList: string[];
  setTodoList: (list: string[]) => void;
}

interface IValue {
  value: string;
}

interface ITarget {
  target: IValue;
}

const AddTodo = ({ todoList, setTodoList }: IAddTodoProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyPressed = ({ key }: { key: string }) => {
    if (key === 'Enter') {
      handleInputChange();
    }
  };

  const handleInputChange = () => {
    if (!inputValue) {
      return;
    }

    const newTodoList = [...todoList];

    newTodoList.push(inputValue);

    setTodoList(newTodoList);
    setInputValue('');
  };

  return (
    <div className="add-todo">
      <h4>Add your task</h4>

      <input
        className="todo-input"
        type="text"
        name="task"
        onChange={({ target }: ITarget) => setInputValue(target.value)}
        value={inputValue}
        onKeyDown={handleKeyPressed}
      />

      <button className="add-task-button" onClick={handleInputChange}>
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
