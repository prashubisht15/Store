import React, { useEffect, useState } from 'react'
import Header from './Header'
import Products from './Products'
import Filter from './Filter'
import axios from 'axios'
import { useSnackbar } from "notistack";


const DashBoard = () => {
    const [prodlist, setProdlist] = useState([])
    const { enquequeSnackbar } = useSnackbar();

    const performApiCall = async () => {
        const url = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
        try {
            const response = await axios.get(url)
            setProdlist(response)
            console.log(prodlist)
        }
        catch (e) {
            enquequeSnackbar(e.response.statusText, { variant: "error" });
        }
    }
    useEffect(() => {
        performApiCall();
    },[])
    return (
        <div>
            <Header />
            <div className='display'>
                <div>
                    <Filter />
                </div>
                <div>
                    <Products prodlist={prodlist} />
                </div>
            </div>
        </div>
    )
}

export default DashBoard