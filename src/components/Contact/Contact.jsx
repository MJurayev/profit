import React, { useState } from 'react';
import "./Contact.scss"

import Button from '../Button/Button'
import Input from '../Input/Input';
const Contact = () => {
    const [state, setState] = useState({
        name: "",
        phone: "",
        service:""
    })
    const token = '5277457178:AAFX7rA92g4mpQZ5hJq9v2EWkNpgXbHg75E'
    const chatId = '-717291687'

    const URL = `http://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html`
    const handleChangeInput = (e) => {
        setState(info => {
            return {...info, [e.target.name]:e.target.value }
        })
    }
    const [step, setStep] = useState(0)
    const handleSubmit = () => {
        // setLoading(true)
        const text = `<b>Name:${state.name}</b>\nService:${state.service}\nPhone:${state.phone}`
        
        fetch(`${URL}&text=${encodeURIComponent(text)}`, {
            method:"POST"
        }).then(res => res.ok ? res.json() : Promise.reject(res))
        .then(res => {
            console.log(res)
            console.log(state)
            setStep(2)
        })
        .catch(err => {
            alert(err?.message || "Something went wrong!!!")
        })
        .finally(() => {
            // setLoading(false)
        })
        
    }
    return (
        <section id='contact' className='contactSection container'>
            <div className='contactSection__contact contact'>   
                <div className='contact__content'>
                    <h3 className='contact__title'>Сколько стоят услуги</h3>
                    <p className='contact__description'>
                        Цена рассчитывается индивидуально в зависимости отсложности, объема и сроков работы.
                        <br />
                        <br />
                        Разработчик оценивает временные затраты по проекту, а аналитики устанавливают стоимость продукта.
                    </p>
                </div>
                <div className={`contact__form ${step!==0 ? 'contact__form--open' : ""}`}>
                    {step === 0 ? 
                        <div className='contact__form__start'>
                            <h3 className='contact__form__start__title'>Получить бесплатную консультацию</h3>
                            <p className='contact__form__start__description'>В рамках консультации уточним необходимую информацию  для анализа вашего проекта</p>
                            <Button className="contact__form__start__btn" onClick={() => {setStep(1)}}>Получить</Button>
                        </div> : step===1 ? <div className='contact__form__fields contact__open'>
                            <form className='contact__form__inputs'>
                                <h3 className='contact__form__start__title'>Получить бесплатную консультацию</h3>
                                <p className='contact__form__start__description'>В рамках консультации уточним необходимую информацию  для анализа вашего проекта</p>
                                <Input
                                    onChange={handleChangeInput}
                                    name="name"
                                    className="contact__form__inputs__input"
                                    placeholder="Ваше имя"
                                    type="text"
                                    value={state.name}
                                />
                                <Input
                                    onChange={handleChangeInput}
                                    name="phone"
                                    className="contact__form__inputs__input"
                                    placeholder="номер телефона"
                                    type="text"
                                    value={state.phone}
                                />
                                <Input
                                    onChange={handleChangeInput}
                                    name="service"
                                    value={state.service}
                                    className="contact__form__inputs__input"
                                    placeholder="какая из услуг вас заинтересовала ?"
                                    type="text" />
                                <Button
                                    className="contact__form__inputs__btn"
                                    onClick={() => {handleSubmit()}}>
                                    Получить
                                </Button>
                            </form>
                        </div> : <div className='contact__form__successfully'>
                                
                                <h3 className='contact__form__successfully__title'>Cпасибо за вашу заявку!</h3>
                                <p className='contact__form__successfully__desc'>Наш менеджер свяжется с вами в течении 3-ех часов</p>
                                <Button onClick={()=>{setStep(0)}} className="contact__form__successfully__btn">отправлено</Button>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default Contact;
