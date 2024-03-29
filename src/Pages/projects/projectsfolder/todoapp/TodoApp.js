import { useState } from "react";
import './todostyle.css';


const TodoApp = () => {
    // State Hook - `useState`
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    const [showEdit, setShowEdit] = useState(-1);
    const [updatedText, setUpdatedText] = useState("");

    // Helper Functions

    /* Adds a new item to the list array*/
    function addItem(e) {
        // ! Check for empty item
        e.preventDefault();

        if (!newItem) {
        alert("Press enter an item.");
        return;
        }

        const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
        };

        // Add new item to items array
        setItems((oldList) => [...oldList, item]);

        // Reset newItem back to original state
        setNewItem("");

        document.getElementById('ffs').style.cssText = 'display:none'
    }

    /* Deletes an item based on the `item.id` key */
    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }

    /* Edit an item text after creating it. */
    function editItem(id, newText) {
        // Get the current item
        const currentItem = items.filter((item) => item.id === id);

        // Create a new item with same id
        const newItem = {
        id: currentItem.id,
        value: newText,
        };

        deleteItem(id);

        // Replace item in the item list
        setItems((oldList) => [...oldList, newItem]);
        setUpdatedText("");
        setShowEdit(-1);
    }

    function changecss(){
        document.getElementById('ffs').style.cssText = 'display:block'
    } 
    
    function changecss2(){
        document.getElementById('ffs').style.cssText = 'display:none'
    } 

    return (
        <div className="todoapp">
            <div className="todoapps">
                {/* 1. Header  */}
                <h1>My Todo List</h1>

                <div id="ffs">
                    {/* 2. Add new item (input) */}
                    <form onSubmit={addItem}>
                        <h2 onClick={changecss2}>❌</h2>
                        <input
                            type="text"
                            placeholder="Add an item..."
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                        />

                        {/* Add (button) */}
                        <button >Add</button>
                    </form>
                </div>

                {/* 3. List of todos (unordered list) */}
                <ul>
                    {items.map((item) => {
                        return (
                        <div>
                            <li key={item.id} onClick={() => setShowEdit(item.id)}>
                            {item.value}
                            <button
                                className="delete-button"
                                onClick={() => deleteItem(item.id)}
                            >
                                ❌
                            </button>
                            </li>

                            {showEdit === item.id ? (
                            <div>
                                <input
                                type="text"
                                value={updatedText}
                                onChange={(e) => setUpdatedText(e.target.value)}
                                />
                                <button onClick={() => editItem(item.id, updatedText)}>
                                Update
                                </button>
                            </div>
                            ) : null}
                        </div>
                        );
                    })}
                </ul>

                <button className="addd" onClick={changecss}>
                    +
                </button>
            </div>
        </div>
    );
}
 
export default TodoApp;