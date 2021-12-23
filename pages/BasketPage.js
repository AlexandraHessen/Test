import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import { ADD_PRODUCT, DEL_PRODUCT } from '../redux/basketAC';
import {plantsEvents} from '../components/events';
// import {withRouter} from 'react-router';

import Basket from '../components/Basket'
import "./BasketPage.css"

class BasketPage extends React.Component{

    state={
        isMadeOrder: false,
        isNeedToWarn: false,
    }
    static propTypes = {
        basket: PropTypes.object.isRequired, // пришло из Redux для проверки есть ли что-то в корзине
                                            // в ответ ничего не передаем 
    }
    componentDidMount =()=>{
        plantsEvents.addListener('EvMadeOrder', this.evMadeOrder);
        plantsEvents.addListener('EvNeedToWarn', this.evNeedToWarn);
        this.scrollTop();
        // console.log(this.state.isNeedToWarn)
        // if(this.state.isNeedToWarn){
            
        //     window.onbeforeunload = function() {
        //         return true;
        //     };
        // }
  
    }

    componentWillUnmount =()=>{
        plantsEvents.removeListener('EvMadeOrder', this.evMadeOrder);
        plantsEvents.removeListener('EvNeedToWarn', this.evNeedToWarn);
        window.onbeforeunload = null;
    }
     // componentDidUnmount(){
    //     window.onbeforeunload = null;
    // }

    evMadeOrder=()=>{
        this.setState({isMadeOrder: true})
    }

    evNeedToWarn=()=>{
        this.setState({isNeedToWarn: true})
    }

    scrollTop = () => {
        window.scrollTo(0, 0);
        console.log('scroll')
    };


    render(){
        // <Route path="/favorites" render={() =>
        //     <div>То что нужно показать если url == /favorites*</div>}>
        // console.log(this.props.location.pathname)
        // console.log(this.props.location.pathname)
        // console.log((this.props.location.pathname === "/basket" )&& this.state.isNeedToWarn)
        
        // if((this.props.location.pathname == "/basket" )&& this.state.isNeedToWarn){
        if(this.state.isNeedToWarn){
            window.onbeforeunload = function() {
                return true;
            };
        }
        // console.log(this.state.isNeedToWarn)
        // console.log(this.props.history.location.pathname)
        // this.scrollTop();
        //????????????? а сели другие ключи будут 
        let countProductsInBasket=Object.keys(this.props.basket.productsInBasket).length;
        return(
            <div className="BasketPage">
                 <h1>Корзина</h1>
                {(countProductsInBasket == 0) ? 

                    ((this.state.isMadeOrder) ?
                    (<div><h1 className="OrderMade">Ваш заказ оформлен!</h1></div>) :
                    (<h3>Корзина пуста.</h3>) ) : 

                <Basket/>}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
      // весь раздел Redux state под именем basket будет доступен
      // данному компоненту как this.props.basket
      basket: state.basket,
    };
  };
  
  export default connect(mapStateToProps)(BasketPage);
//   export default withRouter(connect(mapStateToProps)(BasketPage));
  // экспортируем не этот класс CounterButton а уже обвернутый
  