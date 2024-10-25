import { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const User_list = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  const deleteUser = (id) => {
    const userToDelete = users.find(user => user.id === id);
    if (window.confirm(`Are you sure you want to delete ${userToDelete.name}?`)) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <main>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.rank}
            <FaTrashAlt 
              onClick={() => deleteUser(user.id)} 
              style={{ cursor: 'pointer', marginLeft: '10px' }} 
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default User_list;