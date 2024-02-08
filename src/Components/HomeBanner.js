import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Container } from '@mui/system';



function HomeBanner() {

    //Carousel slider
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1930 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1930, min: 1024 },
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
            <div><h1 className='sub-title'>New Decorating</h1></div>
            <div className='feature-divider'></div>
            <CardMedia sx={{ marginTop: '55px' }} className='home-banner-img'
                component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/site-images/1500-450/63b3f0ba4c6c1.webp" alt="green iguana"
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
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/197270708--1--1676868467.jpeg" alt="green iguana"
                                    />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Odel Gold Horse On White Base Cannister 11X22cm</Typography>
                                    <h2 className='decorPrice' href='#'>LKR 19,950.00</h2>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/192967346--1--1671618004.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Odel Ornament Gold Leaves Wrapped L 14x62cm</Typography>
                                    <p className='decorPrice' href='#'>LKR 26,950.00</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/192967637--1--1672130505.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Odel Ornament Metal Line Sun Design L 40x46cm</Typography>
                                    <p className='decorPrice' href='#'>LKR 49,950.00</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/192967661--1--1672130638.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Odel Man Thinking On Ladder 17x30cm</Typography>
                                    <p className='decorPrice' href='#'>LKR 20,950.00</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Carousel>
                </div>
            </ Container>
        </>
    );
}

export default HomeBanner;