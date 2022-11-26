import React, {useState} from 'react';
import Search from '../../../../Images/search-normal.png'
import Close from '../../../../Images/close.png'
import './Category.css';

function Category() {
  const [tags, setTags] = useState([])
  const handleInput = (event) => {
    if(event.keyCode === 13)
    {
      if(event.target.value === '')
      {
        alert("Please Enter a Value!")
      }
      else{
        setTags(oldTags => [...oldTags , event.target.value]);
      }
    }
  }

  const handleRemove = (tag) => {
    tags.map((currTag) => {
      if(currTag === tag)
      {
        setTags(tags.filter(item => item !== currTag));
      }
      return currTag;
    })
  }

  return (
    <div className="Category">
      <h2>Category</h2>
      <div className='Input'>
        <input type="text" placeholder='Search Category' onKeyUp={handleInput} className="InputField"/>
        <img src={Search} alt="" className="InputIcon"/>
      </div>
      <div className="Tag-Box">
        {tags && tags.map((tag, index) => {
          return (
            <div className="Tag" key={index}>
              {tag}
              <img className="remove-Tag" onClick={() => {handleRemove(tag)}} src={Close} alt=""/>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Category