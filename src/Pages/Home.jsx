import React from 'react'
import HomePageSlider from '../Components/HomePageSlider';
import NavbarTab from '../Components/NavbarTab';
import HomeBanner from '../Components/HomeBanner';
import NewCollection from '../Components/NewCollection';
import FootWear from '../Components/FootWear';
import HomeLife from '../Components/HomeLife';
import { Outlet } from 'react-router-dom';

function Home ()  {
  return (
    <>

{/*=============================== Homep page Slider Section  ===================================*/}
<HomePageSlider />
        
      
        
{/*================================= Navbar Tab Section =======================================*/}
    <NavbarTab />
    

{/*================================= Navbar Tab Section =======================================*/}
    <HomeBanner />



{/*================================= Navbar Tab Section =======================================*/}
    <NewCollection />



{/*================================= Navbar Tab Section =======================================*/}
    <FootWear />



{/*================================= Navbar Tab Section =======================================*/}
    <HomeLife />
    </>
  );
}

export default Home