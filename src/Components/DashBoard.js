import React, { useEffect, useState } from 'react'
import Header from './Header'
import Products from './Products'
import axios from 'axios'
import { useSnackbar } from "notistack";
import './DashBoard.css'

const DashBoard = () => {
    // const checklist = ['type','color','gender']
    const [text,setText] = useState('')
    
    const [prodlist, setProdlist] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const { enquequeSnackbar } = useSnackbar();

    const [category, setCategory] = useState([])
  
    const {categories, setCategories} = useState({
        color : [],
        type : [],
        gender : []
    })
    
  
    
    const performApiCall = async () => {
        const url = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
        try {
            const response = await axios.get(url)  
            
            setProdlist(response.data)
        

            setFilteredData(response.data)
         
        }
        catch (e) {
            enquequeSnackbar(e.response.statusText, { variant: "error" });   
            console.log(e)
        }
    }

    const handleSearch = (e) => {
        if(e.target.value==='')
        {
            setProdlist(filteredData)
        }
        else{
            const searchedProducts = filteredData.filter((product) =>
              product.name.toLowerCase().includes(e.target.value.toLowerCase() || product.type.toLowerCase().includes(e.target.value.toLowerCase()))
            );
            setProdlist(searchedProducts);
            setText(e.target.value)
        }
      };

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
        // if(checked){
        //     setCategories({...categories,
        //     color : [category]},
        //     type : [])
        // }
        else
        {
          setCategory(category.filter((e)=>(e!==value)))
        }
        // newData = prodlist.filter((element)=>{
        //     for(let i=0; i<category.length; i++){
        //          if(element.color=== category[i]){
        //              return element;
        //          }
        //     }
        // })
        // setProdlist(newData)
        console.log(category)

        // ['red', 'blue', 'men']
        for(let i=0; i<category.length; i++){
            const filterProd = [...filteredData].filter((data)=>{
                if(data.color === category[i] || data.type === category[i] || data.gender === category[i])
                {
                    return data;
                }
        })
        setProdlist(filterProd)
    }
    
    // setProdlist(filteredData.filter((data)=>(category.map((ele)=>(ele.)))))
}

    useEffect(() => {
        performApiCall();
    },[])
    // useEffect(()=>{
    //     handleSearch(text)
    // },[text])

    return (
        <div className='dashboard'>
            <Header />
            <div >    
                <Products prodlist={prodlist} handleChange={handleChange} handleSearch={handleSearch} text={text}/>       
            </div>
        </div>
    )
}

export default DashBoard











