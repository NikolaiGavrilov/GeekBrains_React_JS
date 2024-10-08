import { useState } from "react";
import Button from '@mui/material/Button';
import { useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [disabledEffect, setDisabledEffect] = useState(false);

  const increment = () => (setCount((prevCount) => prevCount + 1));
  const decrement = () => (setCount((prevCount) => prevCount - 1));

  useEffect(() => {
    if (count > 0){
      setDisabledEffect(false);
    } else {
      setDisabledEffect(true);
    }
  }, [count, disabledEffect]);

  return (
    <div>
      <p>Значение счетчика: {count}</p>
      <Button variant="contained" onClick={increment}>Увеличить</Button>
      <Button variant="contained" onClick={decrement} disabled={disabledEffect}>Уменьшить</Button>
    </div>
  );
}

export default Counter;