import React,{useEffect, useState} from 'react'
import './Filter.css'
const Filter = ({handleChange}) => {

  return (
    <div className='filter-section'>
      <form>
        <h2>Color</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name="color" value={'red'} onChange={handleChange}/> <span>Red</span>
          </label>
          <label>
            <input type="checkbox" name="color"  value={'blue'} onChange={handleChange} /> <span>Blue</span>
          </label>
          <label>
            <input type="checkbox" name="color"  value={'green'} onChange={handleChange} /> <span>Green</span>
          </label>
          <label>
            <input type="checkbox" name="color"  value={'grey'} onChange={handleChange} /> <span>Grey</span>
          </label>
          <label>
            <input type="checkbox" name="color"  value={'white'} onChange={handleChange} /> <span>White</span>
          </label>
          <label>
            <input type="checkbox" name="color"  value={'black'} onChange={handleChange} /> <span>Black</span>
          </label>
          <label>
            <input type="checkbox" name="color"  value={'pink'} onChange={handleChange} /> <span>Pink</span>
          </label>
          <label>
            <input type="checkbox" name="color"  value={'purple'} onChange={handleChange} /> <span>Purple</span>
          </label>
          <label>
            <input type="checkbox" name="color"  value={'yellow'} onChange={handleChange} /> <span>Yellow</span>
          </label>
        </div>

        <h2>Gender</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name="gender"  value={'men'} onChange={handleChange} /> <span>Men</span>
          </label>
          <label>
            <input type="checkbox" name="gender"  value={'women'} onChange={handleChange} /> <span>Women</span>
          </label>
        </div>
        
        {/* <h2>Price</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name=""  value={250} onChange={handleChange} /> <span>0 - Rs250</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Men'} onChange={handleChange} /> <span>Rs251 - Rs450</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Men'} onChange={handleChange} /> <span>Above Rs450</span>
          </label>
        </div> */}

        <h2>Type</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name="type"  value={'polo'} onChange={handleChange} /> <span>Polo</span>
          </label>
          <label>
            <input type="checkbox" name="type"  value={'hoodie'} onChange={handleChange} /> <span>Hoodie</span>
          </label>
          <label>
            <input type="checkbox" name="type"  value={'basic'} onChange={handleChange} /> <span>Basic</span>
          </label>
        </div>
      </form>
    </div>
       
  )
}

export default Filter
