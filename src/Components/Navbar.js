import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import avathar from '../Images/s1.jpg';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge'

import { Link ,Outlet} from "react-router-dom";
import { Favorite } from '@mui/icons-material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';


const pages = ['Deals', 'New Collection', 'Shop By Brands', 'Mens'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>

        <AppBar position="sticky" className='Navbar'>
            <Container maxWidth={false} sx={{ maxWidth: '1300px' }}>
                <Toolbar disableGutters>

                    <Typography >
                    <Link to="/"><img className='logoImg' src='https://odel.lk/images/logo_white.png' /></Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link style={{ textDecoration:'none' , color: "blue"}} to={`/${page}`}>{page}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/*========================================== For desktop Version ======================================*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2, mx: 1, color: 'white', display: 'block', fontFamily: 'Poppins',
                                    textTransform: 'capitalize'
                                }}
                            >
                                <Link style={{ textDecoration:'none' , color: "white"}} to={`/${page}`}>{page}</Link>
                            </Button>
                        ))}

                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <MenuItem>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </MenuItem>
                            <MenuItem>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <Favorite />
                                    </Badge>
                                </IconButton>
                            </MenuItem>
                        </Box>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ pl: 2 }}>
                                <Avatar alt="Remy Sharp" src={avathar} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                <MenuItem>
                                    <IconButton
                                        size="large"
                                        aria-label="show 17 new notifications"
                                        color="inherit"
                                    >
                                        <Badge badgeContent={17} color="error">
                                            <ShoppingCart />
                                        </Badge>
                                    </IconButton>
                                    <p>ShoppingCart</p>
                                </MenuItem>
                                <MenuItem>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={4} color="error">
                                            <Favorite />
                                        </Badge>
                                    </IconButton>
                                    <p>Favorite</p>
                                </MenuItem>
                            </Box>
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
        
        <Outlet />
        </>
    );
}

