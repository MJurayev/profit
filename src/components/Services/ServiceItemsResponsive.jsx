import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

const ServiceItemsResponsive = ({ children }) => {
    const [mobile, setMobile] = useState(window.innerWidth <= 768)
    useEffect(() => {
        const setterMobile = (e) => {
            setMobile(window.innerWidth <=768)
        }
        window.addEventListener('resize', setterMobile)
        return () => {
            window.removeEventListener('resize', setterMobile)
        }
    }, [])
    if(mobile)
    return (
        <Carousel showThumbs={false} swipeable={true} showStatus={false} showIndicators={false} centerSlidePercentage={100} centerMode={true} className='service__items'>
            {children}
        </Carousel>
        );
    return (
        <div className='service__items'>
            {children}
        </div>
    )
}

export default ServiceItemsResponsive;
