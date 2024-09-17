import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import './TodoList.css'

function ToDoList() {

    const [taskValue, setTaskValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [displayedTasks, setDisplayedTasks] = useState('');

    const updateTask = (e) => {
        setTaskValue(e.target.value);
    }

    const addTask = () => {
        if (taskValue.trim() === '') {
            return;
        }
        const newTasks = [...tasks, { id: Date.now(), value: taskValue }];
        setTasks(newTasks);
        setTaskValue('');
    }

    const removeTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    return (
        <div className='task-adding'>
            <h2>Добавление и удаление задачи (ToDoList)</h2>
            <div >
                <TextField
                    value={taskValue}
                    label="Введите задачу"
                    variant="standard"
                    onChange={updateTask}
                />
                <p style={{color:"red"}}>Добавьте задачу, введя ее в поле ввода и нажав на кнопку. Удалите задачу, нажав на иконку крестика рядом с добавленной задачей.</p>
                <Button onClick={addTask} variant="contained" color="success">Добавить задачу</Button>
            </div>
            <div>
                <h3>Задачи</h3>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {tasks.map((task) => (
                        <ListItem
                            key={task.id}
                            disableGutters
                            secondaryAction={
                                <IconButton aria-label="delete" onClick={() => removeTask(task.id)}>
                                    <ClearIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={task.value} />


                        </ListItem>
                    ))}
                </List>
            </div>

            {/* {tasks.map((task) =>
                <li key={task.id}>{task.value}</li>)} */}
        </div>
    );
}






export default ToDoList;