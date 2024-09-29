import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchUsers } from './store/usersReducer';
import { fetchSpecificUser } from './store/specificUserReducer';

function App() {
  const { users, loading, error } = useSelector((state) => state.users);
  const specificUser = useSelector((state) => state.specificUser.user); 
  const dispatch = useDispatch();
  const [selectedUserId, setSelectedUserId] = useState(null); 

  useEffect(() => {
    dispatch(fetchUsers(3));
  }, [dispatch]);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId); 
    dispatch(fetchSpecificUser(userId));
  };

  return (
    <div className="App">
      <h1>Пользователи</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка {error}</p>}
      {users.length ? (
        <ul>
          {users.map(user => (
            <li className="li-elem" onClick={() => handleUserClick(user.id)} key={user.id}>
              {user.name}
              {selectedUserId === user.id && specificUser && (
                <div className="li-elem-data">
                  <p>Username: {specificUser.username}</p>
                  <p>Phone: {specificUser.phone}</p>
                  <p>Email: {specificUser.email}</p>
                  <p>Address: {specificUser.address.street}, {specificUser.address.city}</p>
                  <p>Company: {specificUser.company.name}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;