// Core
import { useEffect, useState } from 'react';

// API
import { api } from '../../api';

// Other
// import { tasks as mockData } from './tasks.js';

export const useTaskManager = () => {
    const [ tasks, setTasks] = useState([]);
    
    useEffect(() => {
        (async () => {
            const tasks = await api.tasks.getAll();

            setTasks(tasks);
        })();
    }, []);

    return {
        tasks,
    }
}
