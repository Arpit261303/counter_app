import React, { useState } from 'react';

const Home = () => {
  const [counters, setCounters] = useState([
    { id: 1, name: 'Counter 1', value: 0 },
    { id: 2, name: 'Counter 2', value: 0 },
  ]);

  const handleIncrement = (counterId) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === counterId ? { ...counter, value: counter.value + 1 } : counter
      )
    );
  };

  const handleDecrement = (counterId) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === counterId ? { ...counter, value: counter.value - 1 } : counter
      )
    );
  };

  const handleAddCounter = () => {
    const newCounter = {
      id: counters.length + 1,
      name: `Counter ${counters.length + 1}`,
      value: 0,
    };
    setCounters((prevCounters) => [...prevCounters, newCounter]);
  };

  const handleRemoveCounter = (counterId) => {
    setCounters((prevCounters) => prevCounters.filter((counter) => counter.id !== counterId));
  };

  const handleReset = () => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) => ({ ...counter, value: 0 }))
    );
  };

  const handleNameChange = (counterId, newName) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === counterId ? { ...counter, name: newName } : counter
      )
    );
  };

  const handleStartValueChange = (counterId, newStartValue) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === counterId ? { ...counter, value: newStartValue } : counter
      )
    );
  };

  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={handleAddCounter}>Add Counter</button>
      <button onClick={handleReset}>Reset</button>
      {counters.map((counter) => (
        <div key={counter.id}>
          <input
            type="text"
            value={counter.name}
            onChange={(e) => handleNameChange(counter.id, e.target.value)}
          />
          <button onClick={() => handleIncrement(counter.id)}>+</button>
          <span>{counter.value}</span>
          <button onClick={() => handleDecrement(counter.id)}>-</button>
          <button onClick={() => handleRemoveCounter(counter.id)}>Remove</button>
          <input
            type="number"
            value={counter.value}
            onChange={(e) => handleStartValueChange(counter.id, parseInt(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
