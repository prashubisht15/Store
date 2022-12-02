import React,{useEffect, useState} from 'react'
import './Filter.css'
const Filter = ({prodlist}) => {
  const [category, setCategory] = useState([])
  const handleChange=(e)=>{
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if(checked)
    {
      setCategory([
        ...category,value
      ])
    }
    else
    {
      setCategory(category.filter((e)=>(e!==value)))
    }
  }
  useEffect(()=>{
    setCategory(category)
    console.log(category)
  },[category])

  return (
    <div className='filter-section'>
      <form>
        <h2>Color</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name=""  value={'Red'} onChange={handleChange}/> <span>Red</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Blue'} onChange={handleChange} /> <span>Blue</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Green'} onChange={handleChange} /> <span>Green</span>
          </label>
        </div>

        <h2>Gender</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name=""  value={'Men'} onChange={handleChange} /> <span>Men</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Women'} onChange={handleChange} /> <span>Women</span>
          </label>
        </div>
        
        <h2>Price</h2>
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
        </div>

        <h2>Type</h2>
        <div className='category-list'>
          <label>
            <input type="checkbox" name=""  value={'Polo'} onChange={handleChange} /> <span>Polo</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Hoodies'} onChange={handleChange} /> <span>Hoodie</span>
          </label>
          <label>
            <input type="checkbox" name=""  value={'Basic'} onChange={handleChange} /> <span>Basic</span>
          </label>
        </div>
      </form>
    </div>
       
  )
}

export default Filter
