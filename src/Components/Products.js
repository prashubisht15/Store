import React from 'react'
import { Card, CardMedia, Typography, Button, CardContent, CardActions} from '@mui/material'
import { Grid} from '@mui/material'

import './Products.css'

const Products = ({ prodlist }) => {

    return (
        <div>
            <Grid container spacing={2}>

                {
                    prodlist ? (
                        prodlist.map((ele) => (
                            <Grid item sm={4} xs={12} key={ele.id}>
                                <Card sx={{ maxWidth: 300 }}>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={ele.imageURL}
                                    // className="card-media"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {ele.name}
                                        </Typography>
                                    </CardContent>
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
        </div>
    )
}

export default Products
