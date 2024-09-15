import { useState } from "react";

function ToDoList() {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);

    const updateText = (e) => {
        setValue(e.target.value);
    }

    const addList = () => {
        if (value.trim() === '') {
            return;
        }
        const newMessages = [...messages, value];
        setMessages(newMessages);
        setValue('');
    }

    return (
        <div><input type="text" placeholder="Введи текст" onChange={updateText} value={value}></input>
            <button onClick={addList}>Жмяк</button>
            <ul></ul>
            {messages.map((mess, index) => <li key={index}>{mess}</li>)}
        </div>
    );
}

export default ToDoList;