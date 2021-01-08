import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { negative, positive } from '../store/modules/counter/actions';
import { ICount } from '../store/modules/counter/types';

const CounterComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: AppState) => state.count);

  const handlePositive = useCallback(() => {
    dispatch(positive());
  }, [dispatch]);

  const handleNegative = useCallback(() => {
    dispatch(negative());
  }, [dispatch]);

  return (
    <div style={{ display: 'flex' }}>
      <button
        type="button"
        style={{ padding: '20px' }}
        onClick={handlePositive}
      >
        +
      </button>
      {count}
      <button
        type="button"
        style={{ padding: '20px' }}
        onClick={handleNegative}
      >
        -
      </button>
    </div>
  );
};

export default CounterComponent;
