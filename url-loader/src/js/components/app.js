import React, { useState } from 'react';
import wallpaper from '../../assets/wallpaper.jpg'

function App(){

  const [value, setValue] = useState(false)

  const handleClick = () => {
    console.log(value);
    setValue(!value);
  }

  return (
    <div onClick={handleClick}>
      <img src={wallpaper}/>
    </div>
  )
}

export default App;