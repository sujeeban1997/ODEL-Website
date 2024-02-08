import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { Container } from '@mui/system';

function DecorContents  () {
  return (
    <>
        <Container maxWidth={false} sx={{ maxWidth: '1300px' , display: 'flex' , justifyContent: 'space-between'}}>
            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                    <CardMedia className='content-img'
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/181664083--1--1654242495.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Earrings</Typography>
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
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/SWA5600042--1--1647336979.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Necklaces</Typography>
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
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/SWA5580342--1--1621671055.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Watches</Typography>
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
                    component="img" src="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/ICONIPOUCHMISC680--1--1672116447.jpeg" alt="green iguana"
                    />
                        <CardContent>
                            <Typography sx={{fontFamily: 'Poppins' , fontWeight: '500'}} gutterBottom variant="h5" component="div">Wallets</Typography>
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

export default DecorContents;