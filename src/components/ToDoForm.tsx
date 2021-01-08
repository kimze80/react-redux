import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDoItem } from '../store/modules/todo/actions';

const ToDoForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    setText(e.currentTarget.value);
  }, []);

  // console.log(item);

  const pushToList = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addToDoItem({ id: new Date(), item: text }));
    },
    [dispatch, text],
  );

  return (
    <div>
      <form style={{ display: 'flex' }} onSubmit={pushToList}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;
