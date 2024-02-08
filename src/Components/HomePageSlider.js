import * as React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function HomePageSlider  ()  {

    //Carousel slider
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>

    <Carousel 
            infinite={true}
            AnimationDuration={2600}
            autoPlay={true}
            showDots={true}
            autoPlaySpeed={3000}
            responsive={responsive}>
                <div className='card'>
                    <img className='cardImage' src='https://cdn.shopify.com/s/files/1/2232/2239/files/Com_7_2048x2048.jpg?v=1676548088' />
                </div>
                <div className='card'>
                    <img className='cardImage' src='https://cdn.shopify.com/s/files/1/2232/2239/files/Com_8_2048x2048.jpg?v=1677810487' />
                </div>
                <div className='card'>
                    <img className='cardImage' src='https://cdn.shopify.com/s/files/1/2232/2239/files/Com_6_2048x2048.jpg?v=1675954108' />
                </div>
                <div className='card'>
                    <img className='cardImage' src='https://cdn.shopify.com/s/files/1/2232/2239/files/Fb_8e0ade7e-69be-45a7-820e-fbcca14b71e0_2048x2048.jpg?v=1671730851' />
                </div>
                <div className='card'>
                    <img className='cardImage' src='https://cdn.shopify.com/s/files/1/2232/2239/files/Fb_12_2048x2048.jpg?v=1677154444' />
                </div>
                <div className='card'>
                    <img className='cardImage' src='https://cdn.shopify.com/s/files/1/2232/2239/files/Cover_2048x2048.jpg?v=1671178372' />
                </div>
                
            </Carousel>
            </>
  );
}

export default HomePageSlider