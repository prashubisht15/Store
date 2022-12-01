import React from 'react'
import { Card, CardMedia, Typography, Button, CardContent, CardActions} from '@mui/material'
import { Grid} from '@mui/material'
import {InputAdornment, TextField, Box } from '@mui/material'
import {Search} from '@mui/icons-material'

import './Products.css'

const Products = ({ prodlist,value,changeInput }) => {

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
                    value={value}
                    onChange={changeInput}
                ></TextField>
            </Box>
            <Grid className='product-section'
                  container spacing={4}
                  justifyContent="center"
                  alignItems="center">
                {
                    prodlist ? (
                        prodlist.map((ele) => (
                            <Grid item sm={4} xs={12} key={ele.id}>
                                <Card sx={{ maxWidth: 400 }}>
                                   
                                    <Typography gutterBottom variant="h6" component="div">
                                        {ele.name}
                                    </Typography>
                                    
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={ele.imageURL}
                                    // className="card-media"
                                    />
                                    <Box display="flex" >
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
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
        </Box>
    )
}

export default Products
