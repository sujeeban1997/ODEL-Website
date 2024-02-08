import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#000000',
 
  }));

  const ariaLabel = { 'aria-label': 'description' };

function Footer() {
    return (
        <>
            <div className='footer-section'>
                <Box maxWidth={false} sx={{ flexGrow: 1 , maxWidth: '1220px' , margin: 'auto'}}>
                    <Grid container spacing={1}>
                        <Grid item md xs={12}>
                            <Item>
                                <h3 className='footer-sub-title'>Customer Care</h3>
                                <p className='footer-content'><a href='#'>Return & Refund</a></p>
                                <p className='footer-content'><a href='#'>Contact Us</a></p>
                                <p className='footer-content'><a href='#'>Service Payment</a></p>
                                <p className='footer-content'><a href='#'>Store Locator</a></p>
                                <p className='footer-content'><a href='#'>CRM</a></p>
                            </Item>
                        </Grid>
                        <Grid item md xs={12}>
                            <Item>
                            <h3 className='footer-sub-title'>Get To Know Us</h3>
                                <p className='footer-content'><a href='#'>Investor Information</a></p>
                                <p className='footer-content'><a href='#'>Odel Magazine</a></p>
                                
                            </Item>
                        </Grid>
                        <Grid item md xs={12}>
                            <Item>
                                <h3 className='footer-sub-title'>Let us help you</h3>
                                <p className='footer-content'><a href='#'>my account</a></p>
                                <p className='footer-content'><a href='#'>my orders</a></p>
                                <p className='footer-content'><a href='#'>terms of use</a></p>
                                <p className='footer-content'><a href='#'>privacy policy</a></p>
                                <p className='footer-content'><a href='#'>FAQs</a></p>
                            </Item>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Item>
                                <h3 className='footer-sub-title'>sign up for newsletter</h3>
                                <p className='footer-content'>my account</p>
                                <Input fullWidth  variant="standard" class="numero" placeholder="Enter Your Email Here" />
                                <Button className='footer-button'>Subscribe</Button>
                            </Item>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Item sx={{ textAlign: 'center' }}>
                                <h3 className='footer-sub-title'>Shop At Our Group Companies</h3>
                                <Grid sx={{ md:{display: 'flex' , justifyContent: 'space-around' , margin: '0 24rem'} }}>
                                    <img className='company-group-logo' src='https://odel.lk/images/logos/mysl-white-png.webp' />
                                    <img className='company-group-logo' src='https://odel.lk/images/logos/glomark-white-png.webp' />
                                </Grid>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}

export default Footer