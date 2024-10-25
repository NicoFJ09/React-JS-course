import {useState, useEffect} from 'react';
import Form from './Form/Form';
/* import List from './List/List'; */
import Table from './Table/Table';
function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);//join and get needed fetch url
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems(); // Fetch initial data

    /*
    if data were constantly changing could be useful
    const intervalId = setInterval(fetchItems, 5000); // Fetch data every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
    */

  }, [reqType]);
  
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType}/>
      {/* <List items= {items}/> */}
      <Table items = {items}/>
    </div>
  );
}

export default App;
