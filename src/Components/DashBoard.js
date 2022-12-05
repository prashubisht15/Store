import React, { useEffect, useState } from 'react'
import Header from './Header'
import Products from './Products'
import axios from 'axios'
import { useSnackbar } from "notistack";
import './DashBoard.css'

const DashBoard = () => {

    const [prodlist, setProdlist] = useState([])
    const { enquequeSnackbar } = useSnackbar();
    const [filteredData, setFilteredData] = useState([])
    const [checklist, setChecklist] = useState({
        color: [],
        type: [],
        gender: []
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

    const handleText = () => {
        setFilteredData(prodlist)
    }

    const handleSearch = (text) => {
        console.log("EEEEE", text)
        let searchArray = text.toLowerCase().split(" ")
        let ultimateFilter = [...prodlist]
        console.log('searchArray', searchArray)

        ultimateFilter = ultimateFilter.filter((product) =>
            (product.name.toLowerCase().includes(text.toLowerCase()) || 
                product.color.toLowerCase().includes(text.toLowerCase()) || 
                    product.type.toLowerCase().includes(text.toLowerCase())))
        setFilteredData(ultimateFilter);
    };

    const handleChange = (e) => {
        const { name, value, checked } = e.target
        if (checked) {
            const valueArray = checklist[name]
            valueArray.push(value)
            setChecklist({ ...checklist, [name]: valueArray })
        }
        else {
            const valueArray = checklist[name]
            const newfilteredArray = valueArray.filter((e) => e !== value)
            setChecklist({ ...checklist, [name]: newfilteredArray })
        }
    }

    const filterFunction = () => {
        console.log("INSSSiiooo", checklist)
        let ultimateFilter = [...prodlist]
        if (checklist.color.length > 0) {
            ultimateFilter = ultimateFilter.filter((ele) => {
                return checklist.color.includes(ele.color.toLowerCase())
            })
        }
        if (checklist.gender.length > 0) {
            ultimateFilter = ultimateFilter.filter((ele) => {
                return checklist.gender.includes(ele.gender.toLowerCase())
            })
        }
        if (checklist.type.length > 0) {
            ultimateFilter = ultimateFilter.filter((ele) => {
                return checklist.type.includes(ele.type.toLowerCase())
            })
        }
        setFilteredData(ultimateFilter)
    }

    useEffect(() => {
        performApiCall();
    }, [])

    useEffect(() => {
        filterFunction()
    }, [checklist])

    return (
        <div className='dashboard'>
            <Header />
            <div >
                <Products filteredList={filteredData} handleChange={handleChange} handleSearch={handleSearch} handleText={handleText} />
            </div>
        </div>
    )
}
export default DashBoard











