import React from 'react';
import Button from '../Button/Button';
import "./Hero.scss"

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero__content'>
                <h2 className='hero__content__title'>Разаработка сайтов и мобильных приложений</h2>
                <p className='hero__content__desc'>Помогаем бизнесу увеличить прибыль с помощью digital-инструментов</p>
                <Button href="#" className='hero__content__btn'>Обсудить проект</Button>
            </div>
        </div>
    );
}

export default Hero;
