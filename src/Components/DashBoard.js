import React, { useEffect, useState } from "react";
import Header from "./Header";
import Products from "./Products";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./DashBoard.css";

const DashBoard = ({ setCart1 }) => {
  const [prodlist, setProdlist] = useState([]);
  const [cart, setCart] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const [filteredData, setFilteredData] = useState([]);
  const [checklist, setChecklist] = useState({
    color: [],
    type: [],
    gender: [],
  });

  const performApiCall = async () => {
    const url =
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
    try {
      const response = await axios.get(url);
      setProdlist(response.data);
      setFilteredData(response.data);
    } catch (e) {
      enqueueSnackbar(e.response.statusText, { variant: "error" });
    }
  };

  const handleText = () => {
    setFilteredData(prodlist);
  };

  const handleSearch = (text) => {
    let ultimateFilter = [...prodlist]
    ultimateFilter = ultimateFilter.filter(
      (product) =>
        product.name.toLowerCase().includes(text.toLowerCase()) ||
        product.color.toLowerCase().includes(text.toLowerCase()) ||
        product.type.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(ultimateFilter);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const valueArray = checklist[name];
    if (checked) {
      valueArray.push(value);
      setChecklist({ ...checklist, [name]: valueArray });
    } else {
      const newfilteredArray = valueArray.filter((e) => e !== value);
      setChecklist({ ...checklist, [name]: newfilteredArray });
    }
  };

  const filterFunction = () => {
    let ultimateFilter = [...prodlist];
    if (checklist.color.length > 0) {
      ultimateFilter = ultimateFilter.filter((ele) => {
        return checklist.color.includes(ele.color.toLowerCase());
      });
    }
    if (checklist.gender.length > 0) {
      ultimateFilter = ultimateFilter.filter((ele) => {
        return checklist.gender.includes(ele.gender.toLowerCase());
      });
    }
    if (checklist.type.length > 0) {
      ultimateFilter = ultimateFilter.filter((ele) => {
        return checklist.type.includes(ele.type.toLowerCase());
      });
    }
    setFilteredData(ultimateFilter);
  };

  const isIteminCart = (cart, id) => {
    if (cart) {
      return cart.findIndex((e) => e.id === id) !== -1;
    }
  };
  const handleAddToCart = (cartItem, cartItemId) => {
    if (cartItem.quantity === 0) {
      enqueueSnackbar("Item out of Stock", { variant: "warning" });
      return;
    }
    if (isIteminCart(cart, cartItemId))
      enqueueSnackbar("Already Added in cart", { variant: "warning" });
    else {
      enqueueSnackbar("Item added in cart", { variant: "success" });
      setCart([...cart, cartItem]);
    }
  };

  useEffect(() => {
    performApiCall();
  }, []);

  useEffect(() => {
    filterFunction();
  }, [checklist]);

  useEffect(() => {
    setCart1(cart);
  }, [cart]);

  return (
    <div className="dashboard">
      <Header />
      <div>
        <Products
          filteredList={filteredData}
          handleChange={handleChange}
          handleSearch={handleSearch}
          handleText={handleText}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};
export default DashBoard;
