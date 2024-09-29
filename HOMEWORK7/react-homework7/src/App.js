import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { fetchTasks } from './redux/slices/tasksSlice';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const status = useSelector((state) => state.tasks.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Список задач</h1>
      {status === 'succeeded' ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}
              <br></br>
              {task.isCompleted ? <span style={{ color: 'green' }}>Завершено</span> : <span style={{ color: 'red' }}>Не завершено</span>}
            </li>
          ))}
        </ul>
      ) : (
        <p>Подождите, выполняется загрузка...</p>
      )}
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
