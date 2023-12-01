import React, { useState } from 'react';
import { ParcelConfig, ParcelConfigObject } from 'single-spa';
import Parcel from 'single-spa-react/parcel';
import { v4 as uuid } from 'uuid';
// import { Container } from './styles';

const App = ({ name }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    console.log('aqu');
    dispatchEvent(new CustomEvent('@lb/react-route/todo/add-task', {
      detail: {
        id: uuid(),
        describe: task,
      }
    }
    ));

    setTask('');

  }
  return <div>
    <h1>{name}</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={ev => setTask(ev.target.value)} value={task} />
      <button>add</button>
    </form>
    <Parcel config={() => System.import<ParcelConfigObject>('@lb/react-parcel')} />
  </div>;
}

export default App;