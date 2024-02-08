import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Container } from '@mui/system';

function WomenContant  () {
  return (
    <>
        <Container maxWidth={false} sx={{ maxWidth: '1300px' , display: 'flex' , justifyContent: 'space-between'}}>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia className='content-img'
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/183665207--3--1654230764.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Casualwear</Typography>
                            <Typography sx={{fontFamily: 'Poppins'}} variant="body2" color="text.secondary">
                                Lizards are a widespread group 
                            </Typography>
                        <Button sx={{ padding: '12px 0' , color: 'black' , fontFamily: 'Poppins'}} href='#'>View More</Button>
                        </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia className='content-img'
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/148461840--1--1608293855.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Formalwear</Typography>
                            <Typography sx={{fontFamily: 'Poppins'}} variant="body2" color="text.secondary">
                                Lizards are a widespread group 
                            </Typography>
                        <Button sx={{ padding: '12px 0' , color: 'black' , fontFamily: 'Poppins'}} href='#'>View More</Button>
                        </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia className='content-img'
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/130358799--1--1606194942.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Nightwear</Typography>
                            <Typography sx={{fontFamily: 'Poppins'}} variant="body2" color="text.secondary">
                                Lizards are a widespread group 
                            </Typography>
                        <Button sx={{ padding: '12px 0' , color: 'black' , fontFamily: 'Poppins'}} href='#'>View More</Button>
                        </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia className='content-img'
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/8NYACBYJB3Z120000L--1--1604243796.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Swim & Beachwear</Typography>
                            <Typography sx={{fontFamily: 'Poppins'}} variant="body2" color="text.secondary">
                                Lizards are a widespread group 
                            </Typography>
                        <Button sx={{ padding: '12px 0' , color: 'black' , fontFamily: 'Poppins'}} href='#'>View More</Button>
                        </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    </>
  );
}

export default WomenContant;