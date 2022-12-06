import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@mui/material";
import { Grid } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useSnackbar } from "notistack";
import { Search } from "@mui/icons-material";
import Filter from "./Filter";
import { Scrollbars } from "react-custom-scrollbars-2";

import "./Products.css";

const Products = ({
  filteredList,
  handleChange,
  handleSearch,
  handleText,
  handleAddToCart,
}) => {
  const [text, setText] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const handleTextChange = (e) => {
    setText(e.target.value);
    if (e.target.value === "") handleText();
  };
  const handleClick = () => {
    handleSearch(text);
  };

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
      </Box>
      <Grid container spacing={2}>
        <Grid className="product-section" item xs={12} md={3}>
          <Filter handleChange={handleChange} />
        </Grid>
        {/* <Scrollbars> */}
        <Grid
          className="product-section products-collection"
          item
          xs={12}
          md={9}
          container
          rowSpacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {filteredList ? (
            filteredList.map((ele) => (
              <Grid item sm={4} xs={12} key={ele.id}>
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
            <div>No Products</div>
          )}
        </Grid>
        {/* </Scrollbars> */}
      </Grid>
    </Box>
  );
};

export default Products;
