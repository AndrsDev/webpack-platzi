import React, { useState } from 'react';

function App(){

  const [value, setValue] = useState(false)

  const handleClick = () => {
    console.log(value);
    setValue(!value);
  }

  return (
    <div onClick={handleClick}>
      Hello from React: {`${value}`}
    </div>
  )
}

export default App;