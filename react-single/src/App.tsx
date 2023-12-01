import React, { useState } from 'react';

// import { Container } from './styles';

const App = () => {
  const [count, setCount] = useState(0);
  return <div>
    <div>Count = {count}</div>
    <button onClick={() => setCount(state => state + 1)}>Add</button>
  </div>;
}

export default App;