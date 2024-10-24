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


### <font color="#EB5B00">10. Project</font>
- I need an input box that as I type a color it turns the box to said color, it is the builtin javascript colors, using what I know, I will create a new file for this called project, it I will manage everything there

## Texto

Este es un párrafo de texto. Puedes **resaltar en negrita** o *en cursiva*.

También puedes ~~tachar texto~~.

## Glosario Archivos

## Enlaces

[Documentación React](https://react.dev)
[Documentación HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
[Documentación Styled components](https://styled-components.com/)

## Anexos

![Texto Alternativo](https://via.placeholder.com/150)

## Citas

> Esta es una cita.

### Código en Línea
Aquí hay un ejemplo de `código en línea`.
