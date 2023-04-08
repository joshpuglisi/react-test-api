import './App.css';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

function App() {

  const [berryList, setBerryList] = useState()

  const getBerryList = async() => {
    const fetchList = await fetch("https://pokeapi.co/api/v2/berry/"); //REST API call, need to await first because they work asynchronous
    const readList = await fetchList.json(); //json function to read the fetched API as json. Await is needed, otherwise the promise will be pending.
    const listMap = readList.results.map(data => {
      return {
        value : data.name,
        label : data.name
      }
    })
    setBerryList(listMap.sort((a,b) => a.value.localeCompare(b.value))); //input listMap into berryList. And then berryList is referenced in HTML. The sort function is to compare first and second value, the rest is auto
  }

  useEffect(() => {
    getBerryList();
  }, [])

  return (
    <div className="App">
      <Select options={berryList} placeholder="Choose your berries" id='berry-drop'></Select>
    </div>
  );
}

export default App;
