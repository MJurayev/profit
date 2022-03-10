import React from 'react';
import "./Services.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Button from '../Button/Button'
import ServiceItemsResponsive from './ServiceItemsResponsive';
const Services = () => {
    return (
        <section id='service' className='service container'>
            <h2 className='service__title'>Услуги</h2>
            <ServiceItemsResponsive>
                <div className='serviceItem'>
                    <h3 className='serviceItem__title'>Разработка  <br /> сайтов</h3>
                    <Button className="serviceItem__btn">подробнее</Button>
                </div>

                <div className='serviceItem'>
                    <h3 className='serviceItem__title'>Мобильные приложения</h3>
                    <Button className="serviceItem__btn">подробнее</Button>
                </div>

                <div className='serviceItem'>
                    <h3 className='serviceItem__title'>Маркетинг продвижение</h3>
                    <Button className="serviceItem__btn">подробнее</Button>
                </div>

                <div className='serviceItem'>
                    <h3 className='serviceItem__title'>SMM-продвижение</h3>
                    <Button className="serviceItem__btn">подробнее</Button>
                </div>

                <div className='serviceItem'>
                    <h3 className='serviceItem__title'>SEO-оптимизация</h3>
                    <Button className="serviceItem__btn">подробнее</Button>
                </div>

                <div className='serviceItem'>
                    <h3 className='serviceItem__title'>Брендинг и айдентика</h3>
                    <Button className="serviceItem__btn">подробнее</Button>
                </div>
            </ServiceItemsResponsive>
        </section>
    );
}

export default Services;
