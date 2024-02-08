import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Container } from '@mui/system';



function NewCollection() {

    //Carousel slider
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div><h1 className='sub-title'>New NewCollection</h1></div>
            <div className='feature-divider'></div>
            <CardMedia sx={{ marginTop: '55px' }} className='home-banner-img'
                component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/site-images/1500-450/63d0c5fa4bfb0.webp" alt="green iguana"
            />


            {/*================================================= Banner Slider ========================================================*/}
            <Container maxWidth={false} sx={{ maxWidth: '1300px' , marginTop: '5rem'}}>
                <div className='home-page-banner-slider'>
                    <Carousel
                        infinite={true}
                        autoPlay={false}
                        showDots={false}
                        smartSpeed={1500}
                        arrows={true}
                        autoPlaySpeed={5000}
                        responsive={responsive}>
                        <Card sx={{ maxWidth: 280 , margin: 'auto' }}>
                            <CardActionArea>
                                <CardMedia className='banner-img' 
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/184363147--1--1656321991.jpeg" alt="green iguana"
                                    />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Oversized Tshirt</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/181768190--1--1654225620.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Odel Basics Black Maxi Skirt</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/188963431--1--1668750863.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Viscose Short</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/183665207--3--1654230764.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Short Sleeve Tshirt</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/183664968--1--1654225739.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">V Neck Tshirt</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Carousel>
                </div>
            </ Container>
        </>
    );
}

export default NewCollection;