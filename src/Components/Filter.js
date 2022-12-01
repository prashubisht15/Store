import React from 'react'
import './Filter.css'
const Filter = ({prodlist}) => {
  return (
    <div className='filter-section'>
      <form>
        <h2>Color</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name=""  value={'Red'} /> <span>Red</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Blue'} /> <span>Blue</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Green'} /> <span>Green</span>
          </label>
        </div>

        <h2>Gender</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name=""  value={'Men'} /> <span htmlFor="">Men</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Women'} /> <span htmlFor="">Women</span>
          </label>
        </div>
        
        <h2>Price</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name=""  value={'Men'} /> <span htmlFor="">0 - Rs250</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Men'} /> <span htmlFor="">Rs251 - Rs450</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Men'} /> <span htmlFor="">Above Rs450</span>
          </label>
        </div>

        <h2>Type</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name=""  value={'Men'} /> <span htmlFor="">Polo</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Men'} /> <span htmlFor="">Hoodie</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Green'} /> <span htmlFor="">Green</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Men'} /> <span htmlFor="">Basic</span>
          </label>
        </div>
      </form>
    </div>
       
  )
}

export default Filter
