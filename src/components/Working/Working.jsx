import React from 'react';
import "./Working.scss"
const Working = () => {
    return (
        <section id='working' className='working container'>
            <h2 className='working__title'>Как мы работаем </h2>
            <div className='working__items'>
                <div className='workingItem'>
                    <h3 className='workingItem__title'>Исследование ниши и стратегия развития</h3>
                </div>

                <div className='workingItem'>
                    <h3 className='workingItem__title'>Прототипирование UI | UX дизайна для продукта</h3>
                </div>

                <div className='workingItem'>
                    <h3 className='workingItem__title'>Анализ конкурентов и юзабилити тесты</h3>
                </div>

                <div className='workingItem'>
                    <h3 className='workingItem__title'>Разработка <br /> и верстка</h3>
                </div>

                <div className='workingItem'>
                    <h3 className='workingItem__title'>Семантическая структура и оптимизация</h3>
                </div>

                <div className='workingItem'>
                    <h3 className='workingItem__title'>Финальное тестирование и запуск продукта</h3>
                </div>
            </div>
        </section>
    );
}

export default Working;
