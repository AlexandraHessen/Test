"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './Order.css'

class Order extends React.PureComponent{
    state={
        nameError: 'Поле "Имя" обязательно для заполнения!',
        surnameError: 'Поле "Фамилия" обязательно для заполнения!',
        telError: "Введите корректный телефон!",
        emailError: "Введите корректный E-mail!",
    }

    render(){
        return(
            <div className="Order">
                <h1>Оформление заказа:</h1>
                <div>
                    <label htmlFor="name" className="LabelOrder">Имя</label>
                    <input type="text" name="name" className="InputOrder"></input>
                </div>
                <div>
                    <label htmlFor="surname" className="LabelOrder">Фамилия</label>
                    <input type="text" name="surname" className="InputOrder"></input>
                </div>
                <div>
                    <label htmlFor="tel" className="LabelOrder">Телефон</label>
                    <input type="text" name="tel" className="InputOrder"></input>
                </div>
                <div>
                    <label htmlFor="email" className="LabelOrder">Email</label>
                    <input type="text" name="email" className="InputOrder"></input>
                </div>
                <div>
                    <label htmlFor="note" className="LabelOrder">Примечание</label>
                    <textarea name="note" className="TextareaOrder"></textarea>
                </div>
                <input type="button" value="Оформить заказ" className="CheckoutButton"></input>
            </div>
        )
    }
}
export default Order;
