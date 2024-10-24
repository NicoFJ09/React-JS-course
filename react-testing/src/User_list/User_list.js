import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const User_list = () => {
  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      rank: 'Admin' 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      rank: 'User' 
    },
    { 
      id: 3, 
      name: 'Alice Johnson', 
      rank: 'Moderator' 
    }
  ]);

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