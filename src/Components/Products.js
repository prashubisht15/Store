import React from 'react'
import { Card, CardMedia, Typography, Button, CardContent, CardActions } from '@mui/material'
import Image from './logo192.png'
import { Grid } from '@mui/material'
import './Products.css'

const Products = ({ prodlist }) => {

    return (
        <div>
            <Grid container spacing={2}>

                {
                    prodlist ? (
                        prodlist.map((ele) => {
                            <Grid item sm={4} xs={12} key={ele.id}>
                                <Card sx={{ maxWidth: 200 }}>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image={Image}
                                    // className="card-media"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        })
                    ) : (
                        <div>No Products</div>
                    )
                }


            </Grid>
        </div>
    )
}

export default Products
