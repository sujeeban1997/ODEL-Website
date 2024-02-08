import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Container } from '@mui/system';



function FootWear() {

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
            <div><h1 className='sub-title'>FootWear</h1></div>
            <div className='feature-divider'></div>
            <CardMedia sx={{ marginTop: '55px' }} className='home-banner-img'
                component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/site-images/1500-450/62be97ef5362e.webp" alt="green iguana"
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
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/LM541TAN40--1--1627993333.jpeg" alt="green iguana"
                                    />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Men's Tan Crust Leather Shoes</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/180314276--1--1650339052.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Odel Womens Black Heels</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/191164138--1--1671785957.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Girl's FootWear</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/195869320--1--1672128878.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Formal Shoes</Typography>
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

export default FootWear;