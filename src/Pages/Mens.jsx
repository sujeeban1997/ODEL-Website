import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container, Stack } from '@mui/system';
import { Favorite } from '@mui/icons-material';
import Mensdetail from './MensData.json';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

function Mens() {


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div>


                <Container maxWidth={false} sx={{ maxWidth: '1290px', marginTop: '50px' }}>


                    {/*============================================ Tab bar section Menu ========================================== */}
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Formal shirt" value="1" />
                                    <Tab label="t-shirts" value="2" />
                                    <Tab label="shorts" value="3" />
                                </TabList>
                            </Box>
                            {/*========================================= Shirt section boys =================================================*/}
                            <TabPanel value="1" sx={{ padding: '30px 5px' }}>
                                <div className='collection-mens-shirts'>
                                    {Mensdetail.map(MensData => {
                                        return (
                                            <div className='shirt-collection-mens'>
                                                <Card sx={{ maxWidth: 288 }} >{MensData.category}
                                                    <CardActionArea >
                                                        <CardMedia
                                                            component="img"
                                                            src={MensData.imgSrc}
                                                            alt="green iguana"
                                                        />
                                                        <CardContent>
                                                            <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', color: '#787777', fontSize: '14px' }}>
                                                                    {MensData.title}
                                                                </Typography>
                                                                <Typography>
                                                                    <Favorite fontSize='small' />
                                                                </Typography>
                                                            </Stack>
                                                            <Typography gutterBottom sx={{ fontFamily: 'Poppins', fontWeight: '600', marginTop: '8px', fontSize: '15px', color: '#626262' }} component="div">
                                                                {MensData.price}
                                                            </Typography>
                                                            <Typography >
                                                                <Button className='addto-cart-button'>Add to Cart</Button>
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </TabPanel>



                            {/*========================================= T Shirt section boys =================================================*/}
                            <TabPanel value="2" sx={{ padding: '30px 5px' }}>
                                <div className='collection-mens-shirts'>
                                    {Mensdetail.map(MensData => {
                                        return (
                                            <div className='shirt-collection-mens'>
                                                <Card sx={{ maxWidth: 288 }} >{MensData.category}
                                                    <CardActionArea >
                                                        <CardMedia
                                                            component="img"
                                                            src={MensData.imgSrc}
                                                            alt="green iguana"
                                                        />
                                                        <CardContent>
                                                            <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                                                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: '400', color: '#787777', fontSize: '14px' }}>
                                                                    {MensData.title}
                                                                </Typography>
                                                                <Typography>
                                                                    <Favorite fontSize='small' />
                                                                </Typography>
                                                            </Stack>
                                                            <Typography gutterBottom sx={{ fontFamily: 'Poppins', fontWeight: '600', marginTop: '8px', fontSize: '15px', color: '#626262' }} component="div">
                                                                {MensData.price}
                                                            </Typography>
                                                            <Typography >
                                                                <Button className='addto-cart-button'>Add to Cart</Button>
                                                            </Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </TabPanel>


                            {/*========================================= Shorts section boys =================================================*/}
                            <TabPanel value="3" sx={{ padding: '30px 5px' }}>Item Three</TabPanel>
                        </TabContext>
                    </Box>

                </Container>

            </div>
        </>
    );
}

export default Mens;
