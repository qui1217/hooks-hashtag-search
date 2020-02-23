import React, { useState, useEffect } from 'react';
import './App.css'
import Tag from './components/Tag'
import Search from './components/Search'

const App = () => {

  const [hashtags, setHashtags] = useState([{}])

  const [userInput, setUserInput] = useState('hashtag')

  const fetchHashtags = async () => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.ritekit.com/v1/stats/hashtag-suggestions?text=${userInput}&client_id=36bf5cdca522737da6a11ffaf703036f390c42901fa3`)
    const data = await response.json()
    console.log(data.data);
    setHashtags(data.data)
  }

  useEffect(() => {
    fetchHashtags()
  })


  return (
    <React.Fragment>
      <header>
        <h1 style={{"textAlign": 'center'}}>Hashtag Search!</h1>
        <Search
          userInput={userInput}
          setUserInput={setUserInput}
        />
      </header>

      <Tag hashtags={hashtags}/>
    </React.Fragment>
  )
}

export default App;
