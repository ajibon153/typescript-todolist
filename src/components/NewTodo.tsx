import { useContext, useRef } from 'react';
import classes from './NewTodo.module.css';
import { TodoContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  const todoTextInput_ref = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInput_ref.current!.value;

    if (enteredText.length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
    todoTextInput_ref.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInput_ref} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
