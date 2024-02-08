import React from 'react'
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import MensContant from './MensContent';
import WomenContant from './WomenContant';
import DecorContents from './DecorContents';
import KidsContent from './KidsContent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



function NavbarTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div><h1 className='sub-title'>New Arrivals</h1></div>
            <div className='feature-divider'></div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' , display: 'flex' , justifyContent: 'center'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="WOMEN" {...a11yProps(0)} />
                        <Tab label="MEN" {...a11yProps(1)} />
                        <Tab label="DECORATING" {...a11yProps(2)} />
                        <Tab label="KIDS" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <WomenContant />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <MensContant />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DecorContents />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <KidsContent />
                </TabPanel>
            </Box>
        </>
    );
}

export default NavbarTab