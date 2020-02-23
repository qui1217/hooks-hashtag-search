import React from 'react';
import './Search.css'


const Search = (props) => {

  const setInput = (e) => {
    if (e.target.value === '') {
      props.setUserInput(props.userInput)
    }else {
      props.setUserInput(e.target.value)
    }

  }

  return (
    <form onSubmit={setInput}>
      <input
      type="text"
      placeholder="Search for a hashtag!"
      onChange={setInput}/>
      <input type="submit" value="Search for a tag!"/>
    </form>
  )
}

export default Search;
