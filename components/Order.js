"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {add_order} from '../redux/orderAC';

import './Order.css'


class Order extends React.PureComponent{
    state={
        name: '',
        surname: '',
        tel: '',
        email: '',

        nameNotValid: false,    // когда ошибка = true отображается  <span> с ошибкой  (логич выражение) && JSX
        surnameNotValid: false,
        telNotValid: false,
        emailNotValid: false,

        notValidForm: false, // когда вся форма не валидна = true, т.к. buttonSave должен быть disabled= true

        nameError: 'Поле "Имя" обязательно для заполнения!',
        surnameError: 'Поле "Фамилия" обязательно для заполнения!',
        telError: 'Поле "Телефон" обязательно для заполнения. Введите корректный телефон!',
        emailError: 'Поле "E-mail" обязательно для заполнения. Введите корректный E-mail!',
    }

    changeInput = (EO) => {
        this.setState({[EO.target.name]: EO.target.value,
            })
            // this.props.cbChanged(true)
    }

    validName = (EO) => {
        if (this.state.name === ""){
            this.setState({nameNotValid: true})
            // this.setState({nameNotValid: true}, this.validAll)
            return false
        } else{
            this.setState({nameNotValid: false})
            // this.setState({nameNotValid: false}, this.validAll)
            return true
        }
    }
    validSurname = (EO) => {
        if (this.state.surname === ""){
            this.setState({surnameNotValid: true}, this.validAll)
        } else{
            this.setState({surnameNotValid: false}, this.validAll)
        }
    }
    validTel = (EO) => {
        let tel = this.state.tel
        const reg = /^(\+375|80)\s?-?\(?(29|25|44|33|17)\s?-?\)?(\d{3})\s?-?(\d{2})\s?-?(\d{2})$/;
        if (tel === "" || reg.test(tel)){
            this.setState({telNotValid: true}, this.validAll)
        } else{
            this.setState({telNotValid: false}, this.validAll)
        }
    }
    validEmail= (EO) => {
        let email = this.state.email
        const reg = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
        if (this.state.email === "" || reg.test(email) ){
            this.setState({emailNotValid: true}, this.validAll)
        } else{
            this.setState({emailNotValid: false}, this.validAll)
        }
    }

    validAll=()=>{
   
        this.validName()
        if (this.state.nameNotValid||
            this.state.surnameNotValid||
            this.state.telNotValid||
            this.state.emailNotValid
            )
                {this.setState({notValidForm: true})
        } else {
            this.setState({notValidForm: false})
    }
    }


    addOrder=()=>{
   

        this.props.dispatch( add_order({
            // code: this.props.code,
            name: this.state.name,
            surname: this.state.surname,
            tel: this.state.tel,
            email: this.state.email,
        }) )
      }

    render(){
        return(
            <div className="Order">
                <h1>Оформление заказа:</h1>
                <div>
                    <label htmlFor="name" className="LabelOrder">Имя</label>
                    <input type="text" name="name" className="InputOrder" onChange={this.changeInput} onBlur={this.validName}></input>
                    {(this.state.nameNotValid)&&<span className="Error">{this.state.nameError}</span>} 
                </div>
                <div>
                    <label htmlFor="surname" className="LabelOrder">Фамилия</label>
                    <input type="text" name="surname" className="InputOrder" onChange={this.changeInput} onBlur={this.validSurname}></input>
                    {(this.state.surnameNotValid)&&<span className="Error">{this.state.surnameError}</span>} 
                </div>
                <div>
                    <label htmlFor="tel" className="LabelOrder">Телефон</label>
                    <input type="text" name="tel" className="InputOrder" onChange={this.changeInput} onBlur={this.validTel}></input>
                    {(this.state.telNotValid)&&<span className="Error">{this.state.telError}</span>} 
                </div>
                <div>
                    <label htmlFor="email" className="LabelOrder" onChange={this.changeInput} onBlur={this.validEmail}>Email</label>
                    <input type="text" name="email" className="InputOrder"></input>
                    {(this.state.emailNotValid)&&<span className="Error">{this.state.emailError}</span>} 
                </div>
                <div>
                    <label htmlFor="delivery" className="LabelOrder">Способ доставки</label>
                    <select name="delivery" className="InputOrder">
                        <option value = {0}>Самовывоз</option>
                        <option value = {1}>Почтой</option>
                        <option value = {2}>Курьером по Минску</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="payment" className="LabelOrder">Способ оплаты</label>
                    <select name="payment" className="InputOrder">
                        <option value = {0}>Наличными</option>
                        <option value = {1}>Пластиковой картой</option>
                        <option value = {2}>ЕРИП</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="note" className="LabelOrder">Примечание</label>
                    <textarea name="note" className="TextareaOrder"></textarea>
                </div>
                <input type="button" value="Оформить заказ" className="CheckoutButton" onClick = {this.addOrder} disabled={this.state.notValidForm}></input>
            </div>
        )
    }
}
const mapStateToProps = function (state) {
    return {
      // весь раздел Redux state под именем basket будет доступен
      // данному компоненту как this.props.basket
      order: state.order,
    };
  };
  
  export default connect(mapStateToProps)(Order);
  // экспортируем не этот класс CounterButton а уже обвернутый
