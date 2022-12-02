import React, { useEffect, useState } from 'react'
import Header from './Header'
import Products from './Products'
import axios from 'axios'
import { useSnackbar } from "notistack";
import './DashBoard.css'

const DashBoard = () => {
    const [prodlist, setProdlist] = useState([])
    const { enquequeSnackbar } = useSnackbar();

    const performApiCall = async () => {
        const url = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
        try {
            const response = await axios.get(url)
            console.log('res', response.data)
            setProdlist(response.data)
            // console.log('prod', prodlist)
            
        }
        catch (e) {
            enquequeSnackbar(e.response.statusText, { variant: "error" });
           
        }
    }
    useEffect(() => {
        performApiCall();
    },[])

    useEffect(()=>{
        setProdlist(prodlist)
    },[prodlist])

    return (
        <div className='dashboard'>
            <Header />
            <div >    
                <Products prodlist={prodlist} />       
            </div>
        </div>
    )
}

export default DashBoard