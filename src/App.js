import './App.css';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

function App() {

  const [berryList, setBerryList] = useState()

  const getBerryList = async() => {
    const fetchList = await fetch("https://pokeapi.co/api/v2/berry/"); //REST API call, need to await first because they work asynchronous
    const readList = await fetchList.json(); //json function to read the fetched API as json. Await is needed, otherwise the promise will be pending.
    console.log(readList);
  }

  useEffect(() => {
    getBerryList();
  }, [])

  return (
    <div className="App">
      {/*<Select options={options} placeholder="Choose your berries" id='berry-drop'></Select>*/}
    </div>
  );
}

export default App;
