import React, { useEffect,useRef, useState } from 'react';
import "./Header.scss"
import logo from '../../assets/image/profit-logo.svg'
import phone from '../../assets/icons/phone-outgoing.svg'
import mask from '../../assets/image/hero-mask.png'
import tabletMask from '../../assets/image/mask-tablet.png'
import Toggle from '../Icons/Toggle';
const Header = () => {
    const listRef = useRef()
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const handleClose = (e) => {
            if (listRef.current !== e.target && open) {
                setOpen(false)
            }
        }
        window.addEventListener('click', handleClose)
        return () => { window.removeEventListener('click' , handleClose) }
    }, [open])
    return (
        <header id="header"    className='header container'>
            <picture>
                <source srcSet={tabletMask} media='(max-width: 1140px)' />
                <img className='header-mask'  src={mask} alt=""/>
            </picture>
            <a className='header__logo' href="/">
                    <img src={logo} className="header__logo__img" alt="Logo" />
            </a>
            <div onClick={() => {setOpen(x=>!x)}} className='header__toggle header__toggle--open'>
                <Toggle open={open} />
            </div>
            <ul ref={listRef} className={`header__nav nav ${open ? 'nav--open' :''}`}>
                <li className="nav__item">
                    <a href="#service" className="nav__link">Услуги</a>
                </li>
                <li className="nav__item">
                    <a href="#working" className="nav__link">Как мы работаем</a>
                </li>
                <li className="nav__item">
                    <a href="#results" className="nav__link">Результат</a>
                </li>
                <li className="nav__item">
                    <a href="#contact" className="nav__link">Заказать</a>
                </li>
                <li className='nav__item'>
                    <a data-label="Позвонить" className='call' href="tel:998998998">
                        <img className='call__icon' src={phone} alt="Call now " />
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;
