import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import UserList from './User_list/User_list';
import { useEffect, useState } from 'react';

function App() {
  const API_URL = 'http://localhost:3500/users';
  
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Fetch initial data

    const intervalId = setInterval(fetchUsers, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="App">
      <Header title="Homepage"/>
      <Content users={users} /> {/* Pasar los usuarios como props */}
      <UserList initialUsers={users} /> {/* Pasar los usuarios como props */}
      <Footer/>
    </div>
  );
}

export default App;