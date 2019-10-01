import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div class="App">
      <div>
        <h2>useState</h2>
        <p>Declare a new state variable using useState</p>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default UseState;
