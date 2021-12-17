"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {add_order} from '../redux/orderAC';
import {clear_basket} from '../redux/basketAC';
import {plantsEvents} from './events';

import './Order.css'


class Order extends React.PureComponent{
    state={
        name: '',
        surname: '',
        tel: '',
        email: '',
        delivery: 'pickup',
        payment: 'cash',
        note: '',

        nameNotValid: false,    // когда ошибка = true отображается  <span> с ошибкой  (логич выражение) && JSX
        surnameNotValid: false,
        telNotValid: false,
        emailNotValid: false,

        notValidForm: false, // когда вся форма не валидна = true, т.к. buttonSave должен быть disabled= true

        nameError: 'Поле "Имя" обязательно для заполнения!',
        surnameError: 'Поле "Фамилия" обязательно для заполнения!',
        telError: 'Поле "Телефон" обязательно для заполнения. Введите корректный телефон!',
        emailError: 'Поле "E-mail" обязательно для заполнения. Введите корректный E-mail!',

        // isOrderMade: false
    }

    changeInput = (EO) => {
        this.setState({[EO.target.name]: EO.target.value})
            // this.props.cbChanged(true)
    }

    validate = (EO) =>{
        // ----------------------- ВАЛИДАЦИЯ ВСЕХ ПОЛЕЙ ПРИ УХОДЕ С 1 ПОЛЯ-----------------------//
        if (this.state.name === ""){
            // this.setState({nameNotValid: true})
            this.setState({nameNotValid: true}, this.validAll)
        } else{
            // this.setState({nameNotValid: false})
            this.setState({nameNotValid: false}, this.validAll)
    
        }
        
        if (this.state.surname === ""){
            this.setState({surnameNotValid: true}, this.validAll)
        } else{
            this.setState({surnameNotValid: false}, this.validAll)
          
        }
        
        // let tel = this.state.tel
        // const reg = /^(\+375|80)\s?-?\(?(29|25|44|33|17)\s?-?\)?(\d{3})\s?-?(\d{2})\s?-?(\d{2})$/;
        if (this.state.tel === "" || !(/^\+375|80(\s+)?\(?(29|33|44|25|17)\)?(\s+)?[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(this.state.tel))){
            this.setState({telNotValid: true}, this.validAll)
        } else{
            this.setState({telNotValid: false}, this.validAll)
           
        }
        
        // let email = this.state.email
        // const reg = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
        // if (this.state.email === "" || reg.test(email) ){
        if (this.state.email === "" || !(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.state.email))){
            this.setState({emailNotValid: true}, this.validAll)
        } else{
            this.setState({emailNotValid: false}, this.validAll)
        
        }

            }
    

    // validName = (EO) => {
    //     if (this.state.name === ""){
    //         // this.setState({nameNotValid: true})
    //         this.setState({nameNotValid: true}, this.validAll)
    //     } else{
    //         // this.setState({nameNotValid: false})
    //         this.setState({nameNotValid: false}, this.validAll)
    //         return true
    //     }
    // }
    // validSurname = (EO) => {
    //     if (this.state.surname === ""){
    //         this.setState({surnameNotValid: true}, this.validAll)
    //     } else{
    //         this.setState({surnameNotValid: false}, this.validAll)
    //         return true
    //     }
    // }
    // validTel = (EO) => {
    //     let tel = this.state.tel
    //     const reg = /^(\+375|80)\s?-?\(?(29|25|44|33|17)\s?-?\)?(\d{3})\s?-?(\d{2})\s?-?(\d{2})$/;
    //     if (tel === "" || reg.test(tel)){
    //         this.setState({telNotValid: true}, this.validAll)
    //     } else{
    //         this.setState({telNotValid: false}, this.validAll)
    //         return true
    //     }
    // }
    // validEmail= (EO) => {
    //     let email = this.state.email
    //     // const reg = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
    //     // if (this.state.email === "" || reg.test(email) ){
    //     if (this.state.email === ""){
    //         this.setState({emailNotValid: true}, this.validAll)
    //     } else{
    //         this.setState({emailNotValid: false}, this.validAll)
    //         return true
    //     }
    // }

    validAll=(EO)=>{
        // console.log(EO.target.value)
        if (this.state.nameNotValid||
            this.state.surnameNotValid||
            this.state.telNotValid||
            this.state.emailNotValid
            )
                {this.setState({notValidForm: true}) //button disabled=true
        } else  {
            this.setState({notValidForm: false})
    }
        
        
    //     {
    //         if(this.state.name!==""){
    //             {this.setState({notValidForm: false})
    //                 if(EO.target="button"){
    //                     this.props.dispatch( add_order({
    //                 // code: this.props.code,
    //                 name: this.state.name,
    //                 surname: this.state.surname,
    //                 tel: this.state.tel,
    //                 email: this.state.email,
    //             }) )
    //             }

    //         }
    //     }
            
    // }
    // console.log(this.state.nameNotValid)
    }


    addOrder=()=>{
        // let validName=this.validName();
        // let validSurname = this.validSurname();
        // let validTel =this.validTel();
        // let validEmail =this.validEmail();
        // if(validName && validSurname && validTel && validEmail){
            // let validName=this.validName();
            // let validSurname = this.validSurname();
            // let validTel =this.validTel();
            // let validEmail =this.validEmail();
            // if(this.validName() && this.validSurname() && this.validTel() && this.validEmail()){
            // this.setState({isOrderMade: true});
            this.props.dispatch( add_order( this.state.tel,
                        {
                            name: this.state.name,
                            surname: this.state.surname,
                            tel: this.state.tel,
                            email: this.state.email,
                            delivery: this.state.delivery,
                            payment: this.state.payment,
                            note: this.state.note,
                        }) );
            this.props.dispatch( clear_basket() );
            plantsEvents.emit('EvMadeOrder', true)
        // }
        // console.log(this.state.notValidForm)
        // if(  this.validName()&&this.validSurname()&&this.validTel()&&this.validEmail()){
        // this.props.dispatch( add_order({
        //     // code: this.props.code,
        //     name: this.state.name,
        //     surname: this.state.surname,
        //     tel: this.state.tel,
        //     email: this.state.email,
        // }) )
        // }

        // this.props.dispatch( add_order({
        //     // code: this.props.code,
        //     name: this.state.name,
        //     surname: this.state.surname,
        //     tel: this.state.tel,
        //     email: this.state.email,
        // }) )
      }

    render(){
        return(
            // (this.state.isOrderMade)?
            // (<div className="OrderMade"><h1>Ваш заказ оформлен!</h1></div>):
            <div className="Order">
                <h1>Оформление заказа:</h1>
                <div>
                    <label htmlFor="name" className="LabelOrder">Имя</label>
                    <input type="text" name="name" className="InputOrder" onChange={this.changeInput} onBlur={this.validate} autoFocus></input>
                    {(this.state.nameNotValid)&&<span className="Error">{this.state.nameError}</span>} 
                </div>
                <div>
                    <label htmlFor="surname" className="LabelOrder">Фамилия</label>
                    <input type="text" name="surname" className="InputOrder" onChange={this.changeInput} onBlur={this.validate}></input>
                    {(this.state.surnameNotValid)&&<span className="Error">{this.state.surnameError}</span>} 
                </div>
                <div>
                    <label htmlFor="tel" className="LabelOrder">Телефон</label>
                    <input type="text" name="tel" className="InputOrder" placeholder="+37529111-22-33" onChange={this.changeInput} onBlur={this.validate}></input>
                    {(this.state.telNotValid)&&<span className="Error">{this.state.telError}</span>} 
                </div>
                <div>
                    <label htmlFor="email" className="LabelOrder">Email</label>
                    <input type="text" name="email" className="InputOrder" placeholder="email@gmail.com"onChange={this.changeInput} onBlur={this.validate}></input>
                    {(this.state.emailNotValid)&&<span className="Error">{this.state.emailError}</span>} 
                </div>
                <div>
                    <label htmlFor="delivery" className="LabelOrder">Способ доставки</label>
                    <select name="delivery" className="InputOrder" onChange = {this.changeInput}>
                        <option value = {"pickup"}>Самовывоз</option>
                        <option value = {"post"}>Почтой</option>
                        <option value = {"courier"}>Курьером по Минску</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="payment" className="LabelOrder">Способ оплаты</label>
                    <select name="payment" className="InputOrder" onChange = {this.changeInput}>
                        <option value = {"cash"}>Наличными</option>
                        <option value = {"card"}>Пластиковой картой</option>
                        <option value = {"erip"}>ЕРИП</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="note" className="LabelOrder">Примечание</label>
                    <textarea name="note" className="TextareaOrder" onChange = {this.changeInput}></textarea>
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
      basket: state.basket,
    };
  };
  
  export default connect(mapStateToProps)(Order);
  // экспортируем не этот класс CounterButton а уже обвернутый
