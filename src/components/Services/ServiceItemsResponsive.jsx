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
            <div className='service__items'>
                {/* <div className='prev__btn'></div> */}
                
                <Carousel
                    className='service__items__carousel'
                    showThumbs={false}
                    swipeable={true}
                    showStatus={false}
                    showIndicators={false}
                    centerSlidePercentage={100}
                    centerMode={true}
                    renderArrowNext={(cb, hasNext, label) => {
                        if(hasNext)
                        return <div onClick={cb} className='next__btn'></div>
                    }}

                    renderArrowPrev={(cb, hasPrev, label) => {
                        if (hasPrev) return <div onClick={cb} className='prev__btn'></div>
                        return
                    }}
                >
                    {children}
                </Carousel>
        </div>
        
        );
    return (
        <div className='service__items'>

            {children}
        </div>
    )
}

export default ServiceItemsResponsive;
