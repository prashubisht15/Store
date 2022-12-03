import React,{useState} from 'react'
import { Card, CardMedia, Typography, Button, CardContent, CardActions} from '@mui/material'
import { Grid} from '@mui/material'
import {InputAdornment, TextField, Box } from '@mui/material'
import {Search} from '@mui/icons-material'
import Filter from './Filter'

import './Products.css'

const Products = ({ prodlist,value,handleChange,handleSearch,text}) => {    
    return (
        <Box container className='product-component'>
            <Box className='search-bar'>
                <TextField
                    className="search-desktop"
                    size="small"
                    type="text"
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search color="primary" />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Search for items/categories"
                    name="search"
                    // value={text}
                    onChange={(e)=>handleSearch(e)}
                ></TextField>
            </Box>
            <Grid container spacing={1}>
                <Grid className='product-section' item xs={12} md={3}>
                    <Filter handleChange={handleChange}/>
                </Grid>
                <Grid className='product-section'
                    item
                    xs={12}
                    md={9}
                    container spacing={4}
                    justifyContent="center"
                    alignItems="center"
                    >
                    {
                        prodlist ? (
                            prodlist.map((ele) => (
                                <Grid item sm={4} xs={12} key={ele.id}>
                                    <Card className="product-grid" sx={{ maxWidth: 350 }}>
                                    
                                        <Typography gutterBottom variant="h6" component="div">
                                            {ele.name}
                                        </Typography>
                                        
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={ele.imageURL}
                                        />
                                        <Box display="flex" className="product-call">
                                            <CardContent>
                                                <Typography className="product-price" gutterBottom variant="h6" component="div">
                                                    Rs. {ele.price}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="Large" id="add-btn" >Add to Cart</Button>
                                            </CardActions>
                                        </Box>

                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <div>No Products</div>
                        )
                    }
                </Grid>
            </Grid>

        </Box>
    )
}

export default Products
