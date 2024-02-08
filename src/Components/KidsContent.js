import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Container } from '@mui/system';

function KidsContent  () {
  return (
    <>
        <Container maxWidth={false} sx={{ maxWidth: '1300px' , display: 'flex' , justifyContent: 'space-between'}}>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia className='content-img'
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/SM253201000--1--1620630533.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Toys</Typography>
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
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/174063271--1--1639645231.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">T-Shirts</Typography>
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
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/MC-531188--1--1657779860.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Pillows</Typography>
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
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/175463293--1--1644299210.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Dresses-Pinafores</Typography>
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

export default KidsContent;