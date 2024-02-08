import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Container } from '@mui/system';

function MensContant  () {
  return (
    <>
        <Container maxWidth={false} sx={{ maxWidth: '1300px' , display: 'flex' , justifyContent: 'space-between'}}>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia className='content-img'
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/182566311--1--1655954449.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Shirts</Typography>
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
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/158514731--1--1625658298.jpeg" alt="green iguana"
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
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/131960423--1--1606033283.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Suits</Typography>
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
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/141859601--1--1612852526.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Pants & Trousers</Typography>
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

export default MensContant;