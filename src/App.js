import './App.css';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

function App() {

  const [berryList, setBerryList] = useState();
  const [outBerry, setOutBerry] = useState("");

  const getBerryList = async() => {
    const fetchList = await fetch("https://pokeapi.co/api/v2/berry/"); //REST API call, need to await first because they work asynchronous
    const readList = await fetchList.json(); //json function to read the fetched API as json. Await is needed, otherwise the promise will be pending.
    const listMap = readList.results.map(data => { //map function is used to map the json into new items array for SELECT.
      return {
        value : data.name, //the value field will be assigned with name from json data
        label : data.name //the label field will be assigned with also name from json data
      }
    })
    setBerryList(listMap.sort((a,b) => a.value.localeCompare(b.value))); //input listMap into berryList. And then berryList is referenced in HTML. The sort function is to compare first and second value, the rest is auto
  }

  const handleChange = (value) => {
      setOutBerry(value);
  }

  useEffect(() => {
    getBerryList();
  }, [])

  return (
    <div className="App">
      <h2>The Berry you have selected is:</h2>
      <h1>{outBerry}</h1>
      <Select options={berryList} placeholder="Choose your berries" id='berry-drop' onChange={(e) => handleChange(e.value)}></Select>
      {/*<Select options={berryList} placeholder="Choose your berries" id='berry-drop' onChange={(e) => console.log('event', e)}></Select> ---> used to record output for precaution*/}
    </div>
  );
}

export default App;
