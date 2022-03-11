import React from 'react';
import "./Contact.scss"

import Button from '../Button/Button'
const Contact = () => {
    return (
        <section id='contact' className='contactSection container'>
            <div className='contactSection__contact contact'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Сколько стоят услуги</h3>
                    <p className='contact__description'>
                        Цена рассчитывается индивидуально в зависимости отсложности, объема и сроков работы. Разработчик оценивает временные затраты по проекту, а аналитики устанавливают стоимость продукта.
                    </p>
                </div>
                <div className='contact__form'>
                    <h3 className='contact__form__title'>Получить бесплатную консультацию</h3>
                    <p className='contact__form__description'>В рамках консультации уточним необходимую информацию  для анализа вашего проекта</p>
                    <Button>Получить</Button>
                </div>
            </div>
        </section>
    );
}

export default Contact;
