import React from 'react';
import "./Footer.scss"
const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='footer__links links'>
                <li className="footer__item">
                    <a href="#service" className="footer__link">Услуги</a>
                </li>
                <li className="footer__item">
                    <a href="#working" className="footer__link">Как мы работаем</a>
                </li>
                <li className="footer__item">
                    <a href="#results" className="footer__link">Результат</a>
                </li>
                <li className="footer__item">
                    <a href="#a" className="footer__link">Заказать</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
