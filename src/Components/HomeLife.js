import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Container } from '@mui/system';



function HomeLife() {

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
            <div><h1 className='sub-title'>Home & LifeStyLe</h1></div>
            <div className='feature-divider'></div>
            <CardMedia sx={{ marginTop: '55px' }} className='home-banner-img'
                component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/site-images/1500-450/63c7915448147.webp" alt="green iguana"
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
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/149012173--1--1614414997.jpeg" alt="green iguana"
                                    />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Dining</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/159662508--1--1623352484.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Garden</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/142462964--1--1623756230.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Bedroom</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/181721762--1--1654861307.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Kitchen</Typography>
                                    <Button className='slidershop-btn' href='#'>Shop Now</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 280 , margin: 'auto'}}>
                            <CardActionArea>
                                <CardMedia className='banner-img'
                                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/178363597--1--1645693087.jpeg" alt="green iguana"
                                />
                                <CardContent>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: '500' , color: '#626262'}} gutterBottom variant="p" component="div">Living Room</Typography>
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

export default HomeLife;