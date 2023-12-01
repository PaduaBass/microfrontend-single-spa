import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

const App = ({ name }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    window.addEventListener('@lb/react-route/todo/add-task', (ev: any) => {
      setTasks(oldtask => [...oldtask, ev.detail])
    });
  }, []);

  return <div>
    <h1>{name}</h1>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>task</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.describe}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
}

export default App;