# Color pallete: 
- <font color="#FFB200"> #FFB200 </font>
- <font color="#EB5B00"> #EB5B00 </font>
- <font color="#E4003A"> #E4003A </font>
-  <font color="#B60071"> #B60071 </font>

# <font color="E4003A"> React JS Full Course </font>

##  <font color="#FFB200"> Content </font>
### <font color="#EB5B00">1. Creating React proyect </font>
### <font color="#EB5B00">2. App & JSX </font>
### <font color="#EB5B00">3. Functional Components </font>
### <font color="#EB5B00">4. Applying CSS styles </font>
### <font color="#EB5B00">5. Click Events</font>
### <font color="#EB5B00">6. Use State Hook</font>
### <font color="#EB5B00">7. Lists and Keys</font>
### <font color="#EB5B00">8. Props & Prop Drilling</font>
### <font color="#EB5B00">9. Controlled Component Inputs</font>
### <font color="#EB5B00">10. Project</font>
### <font color="#EB5B00">11. Use Effect hook</font>
### <font color="#EB5B00">12. JSON server</font>
### <font color="#EB5B00">13. Fetch API Data</font>
### <font color="#EB5B00">14. CRUD Operations</font>
### <font color="#EB5B00">15. Fetch Data Challenge</font>
### <font color="#EB5B00">16. React Router</font>
### <font color="#EB5B00">17. Router Hooks and links</font>
### <font color="#EB5B00">18. FlexBox Components</font>
### <font color="#EB5B00">19. Axios API Requests</font>
---

# <font color="E4003A"> Information </font>

### <font color="#EB5B00">1. Creating React proyect </font>
- npx create-react-app "INSERT PROYECT NAME"

- **Only src file is used** unless want to change core stuff from the index html file in public (nah)

- Apptest, reportWebVitals and setupTests **OBSOLETE**

- Check commands in the package.json (or simply readme)

---

### <font color="#EB5B00">2. App & JSX </font>
- general syntax works similar to normal html and css
- Shift+alt+a to comment text
- Created components (constants, variables or function returns) are added to html code using { }
---

### <font color="#EB5B00">3. Functional Components </font>
These are reusable components that have many functionalities within my code, the app file is the main code, do not touch it.

- Make good use of the html separators, don't abuse divs
- ctrl + alt + R to use snippet search for reusable (rafce for basic one, js) component templates for when I create new components
---

### <font color="#EB5B00">4. Applying CSS styles </font>
- Index is global so for small projects it works, generally you create one per component, you can create global classnames within this to for example handle the whole .App class from there
- Index allows to manage these conviniently: Typography, base colors, standard margins, and paddings can be managed in a single place.
- Styled components, separate file that manages the js style.
- Generally css changes not done directly unless small component that does not require a whole file, probs won't happen, what I can do is instead of overriding already existing classnames created in css I can create styles within the js file to add within a separator, like to a div or a header.
---

### <font color="#EB5B00">5. Click Events</font>
- As creating any other event listener just through the js file is fine, consider this, mixing pure html may not be a bad practice, could help with structure more, should see their style and mantain it but it seems cool to do it like that, still don't forget the pure css management of these.

---

### <font color="#EB5B00">6. Use State Hook</font>

- Can be used for counters, forms, visibility states, loading states, etc. Basically a temp var that is global for my js file setup. You set an initial value and can later manipulate at will.
- e is a standarized way of typing event, could name anything

---

### <font color="#EB5B00">7. Lists and Keys</font>
- npm i react-icons -D for general development (used for trashcan in this case)
- Define a list within a use state and can divide it with keys to call it and also use it to organize, I can manipulate with the use state aswell, this allows me to delete from the options. could add other conditions within each index like a registered checkbox based on a bool.

```javascript
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
```
---

### <font color="#EB5B00">8. Props & Prop Drilling</font>
- I can pass properties to a component using props as an input to the const Header for example:
```javascript
function App() {

  return (
    <div className="App">
      <Header title="Homepage"/>
```

- if I were to do, {props.title} in the original header definition, it would return what I defined it as in app, it seems to be a good organizer but dont see much use directly from app, basically it is a tag that I can take and input into components, I could just call it as title, **props seems unnecesary then**.
- It could also help me pass variables to the specific component that maybe I retrieve from a function established in the app file, if this were the case then I could send lists to specific components, etc
-I could pass all functions to App and pass them to that file too, **COULD BE USEFUL TO ORGANIZE REPEATED FUNCTIONS** do not define them in app but passing them seems fine, like a sort of chain, but probably just defining in respective files is fine. This means I could have a file with only **REUSABLE COMPONENTS**, then in app I call that file and pass all of them into the respective components defined there **PRETTY COOL**
---


### <font color="#EB5B00">9. Controlled Component Inputs</font>
```javascript
const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
      >
        <FaPlus />
      </button>
    </form>
  );
};

```
- The htmlfor connects the label to the input so that when I click the title it already readys the prompt to then write, autofocus makes the input space the focus as the page loads, the required makes you have to fill the form. **It is a controlled component input because whatever goes within the form submits the value and sets a new item this is called from another file, as you can see the methods are established at the beginning of the const**
- For context: The onChange function is called each time the user types in the input field. This function updates the newItem state with the current value of the input field (e.target.value).
---

### <font color="#EB5B00">10. Project</font>
- I need an input box that as I type a color it turns the box to said color, it is the builtin javascript colors, using what I know, I will create a new file for this called project, it I will manage everything there
- I created a text input and color box component which I imported to app I used an on input change that returns a value to main since it is prop I established and said return is sent to color box through a prop, the color prop just updates with it normally, I created a toggle button to be able to see the text in darkness too.
---
### <font color="#EB5B00">11. Use Effect hook</font>
- This is a constant action, as use state just waits and shifts different conditions or states. Use effect does things for every render, whether it is a key type or scrolling, so it can help me with some animations or specific processes.

**Normally this would not be ideal**, if we add a dependency the change happens during a load time so if I went:
```javascript
useEffect(() => {
  console.log("load time")
}, [])
}
```
the [] adds the dependency for reloading, that defines the useeffect update to save on resources so I guess I could make scroll animations purely depend on scrolling to save on resources, if the scroll changes that is what matters
-use effect is is not synced with the order of operations so I would have to directly establish order I guess
-seems to work when the page gets reset to fetch specific information or for first timers

---
### <font color="#EB5B00">12. JSON server</font>
- Usamos npx install json-server (no lo queremos como dependencia, solo para usarlo)
-we save intro a data folder and db.jsonfile
**npx json-server -p 3500 -w data/db.json**
Check docu to see how to manipulate the data

---

### <font color="#EB5B00">13. Fetch API Data</font>
```javascript
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
```

I retrieve the data and send it into userlist, it updates automatically checking at specific intervals, web sockets would be the most efficient approach.

### <font color="#EB5B00">14. CRUD Operations</font>

```javascript
const apiRequest = async (url = '', optionsObj = null, errMsg = null ) => {
    try {
        const response = await fetch(url, optionsObj);
        const data = await response.json();
        return data;
    } catch (error) {
        errMsg = error.message;
        return null;
    } finally {
        return errMsg;
    }
}

export default apiRequest;
```
- This manages the fetcing separately so that I can handle error cases safely
```javascript
const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(myNewItem)
};

const result = await apiRequest(API_URL, postOptions);
if (result) setFetchError(result);
```
- Then I can choose to do specific changes, wait for the apiRequest and it will only work without errors unless the output is null, the apiResquest is made well.

- apiRequest is also used to handle updates to the db using the position of the specific checked item, sorted by an id and switching a bool var for example, it accesses the url and ends up changing the data in the json, through the apirequest and a patch method

**There are all the JSON posibilities:**

GET    /posts

GET    /posts/:id

POST   /posts

PUT    /posts/:id

PATCH  /posts/:id

DELETE /posts/:id

- The guy in the tutorial creates all methods directly in app to check, add and delete items using these JSON methods, reverse engineer later

### <font color="#EB5B00">15. Fetch Data Challenge</font>
Create 3 different pages with data of (users, posts and comments based on the JSON placeholder). I extract the data from Json Placeholder and use it for my webpage. Solution in challenge 2

### <font color="#EB5B00">16. React Router</font>
-Used to manage routes between screens, you adapt the index.js and manage routes between components with ease.

-Use routes before writing route, I add the directions in the syntax established in app.js.
**react-router-test has everything**

### <font color="#EB5B00">17. Router Hooks and links</font>
- Here I am told how to manage paths in a navbar, adding the Link functionality from reactrouterdom, or directly added to specific texts in a screen like titles, in this case the blog posts are hardcoded into app, in another case by retrieving from server it should work right where it sends through props all the info until it reaches what it must, separation of components is prioritized, pretty cool, like a priority pyramid.

- **something to consider:** `whenever coding just creating the structure and calling other components makes it easier` it is task separating, the same with classNames if I just define them then creating them is very useful, lastly divs are fine but there are builtin html components that work great

- I defined all screens for a blog app, it mas mostly shifting between use states and use effects for specifically deleting or adding posts fairly easy, `reread when need to use again`.

### <font color="#EB5B00">18. FlexBox Components</font>
- Basically helps to manage UI of the blog to make the flexbox manage itself correctly
- **Everything is attached to the #root div in index.js** so it could easily cause interference.
- Centers the root as a whole and uses flex-grow to cover the whole page

### <font color="#EB5B00">19. Axios API Requests</font>
- This one makes requesting data easier than when using the fetch API.
- You create the same dbjson file as last time and an api folder too with the direction in this case localhost 3500, we run the code as before `npx json-server -p 3500 -w Data/db.json`
- Pretty cool how everything was managed, update through edits was the most complicated tbh, recheck this code whenever I want to see how to handle data with server, overall simple, syntax important.


## <font color="#B60071"> Links </font>

[Documentation React](https://react.dev)

[Documentation HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

[Documentation Styled components](https://styled-components.com/)

[Documentation JSON Server](https://www.npmjs.com/package/json-server)

[Documentation Axios for json db](https://www.npmjs.com/package/axios)