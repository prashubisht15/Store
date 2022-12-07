import React, { useState } from "react";
import { Card, CardMedia, Typography, Button } from "@mui/material";
import { Grid } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import Filter from "./Filter";
import "./Products.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect } from "react";

const Products = ({
  filteredList,
  handleChange,
  handleSearch,
  handleText,
  handleAddToCart,
}) => {
  const [text, setText] = useState("");
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const detectSize=()=>{
    setWindowWidth(window.innerWidth)
  }
  const handleTextChange = (e) => {
    setText(e.target.value);
    if (e.target.value === "") handleText();
  };
  const handleClick = () => {
    handleSearch(text);
  };
  const handleToggle = () => {
    setToggle1(!toggle1);
    setToggle2(!toggle2)
  };
  useEffect(()=>{
    window.addEventListener('resize',detectSize)
    if(windowWidth<=900)
    {
      setToggle1(false)
      setToggle2(true)
    }
    if(windowWidth>900){
      setToggle1(true)
      setToggle2(true)
    }
    return()=>{
      window.removeEventListener('resize',detectSize)
    }
  },[windowWidth])

  return (
    <Box container className="product-component">
      <Box className="search-bar">
        <TextField
          className="search-desktop"
          size="small"
          type="text"
          fullWidth
          placeholder="Search for items/categories"
          name="search"
          onChange={(e) => handleTextChange(e)}
        ></TextField>
        <button onClick={handleClick}>
          <Search />
        </button>
        <button className='filter-button' onClick={handleToggle}>
          <FilterAltIcon />
        </button>
      </Box>
      <Grid container spacing={2}>
        {toggle1 && <Grid className="product-section filter-grid" item xs={12} md={3} >
          <Filter handleChange={handleChange} />
        </Grid>}
        {toggle2 && <Grid
          className="product-section products-collection"
          item
          xs={12}
          md={9}
          container
          rowSpacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {filteredList && filteredList.length ? (
            filteredList.map((ele) => (
              <Grid item sm={4} md={4} xs={12} key={ele.id}>
                <Card className="product-grid">
                  <Typography gutterBottom variant="h6" component="div">
                    {ele.name}
                  </Typography>
                  <CardMedia component="img" image={ele.imageURL} />
                  <Box display="flex" className="product-call">
                    <Typography
                      className="product-price"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Rs. {ele.price}
                    </Typography>
                    <Button
                      size="Large"
                      id="add-btn"
                      onClick={() => handleAddToCart(ele, ele.id)}
                    >
                      Add to cart
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))
          ) : (
            <div className="no-product">
              <h1>No Such Products</h1>
            </div>
          )}
        </Grid>}
        {/* </Scrollbars> */}
      </Grid>
    </Box>
  );
};

export default Products;
