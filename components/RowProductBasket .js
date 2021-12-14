import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {del_product} from '../redux/basketAC';

import './RowProductBasket.css'

class RowProductBasket extends React.PureComponent{
    // info = {this.props.basket.productsInBasket[prod]}
    // от родительского копионента Basket
    static propTypes = {
        info: PropTypes.shape({
            code: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            imgUrl: PropTypes.string.isRequired,
            // category: PropTypes.string.isRequired,
            // brand: PropTypes.string.isRequired,
            // description: PropTypes.string.isRequired,
            // qty: PropTypes.number.isRequired,
            // sum: PropTypes.number.isRequired,
          }),
      };

    //   componentWillMount(){
        delProductFromBasket = () =>{
            this.props.dispatch( del_product(this.props.info.code) );
                                // del_product = function(productId)
                                console.log(this.props.info.code)
          }
    //   }



      render(){
          let count=1
          let total=this.props.info.price*count

        return(
            <tr className="RowProductBasket">
                <td><img src={this.props.info.imgUrl} className="Img"></img></td>
                <td className="Name">{this.props.info.name}</td>
                <td className="Price">{this.props.info.price} руб.</td>
                <td className="Count"><input type="text" className="CountInfo"></input></td>
                <td className="Total">{total} руб.</td>
                <td >
                    <button type="button" onClick = {this.delProductFromBasket} className="DelButton">
                        <i className="far fa-times-circle"></i>
                    </button>
                </td>
            </tr>
        )      
    }
}

const mapStateToProps = function (state) {
    // этому компоненту ничего не нужно из хранилища Redux
    return { }; 
};

export default connect(mapStateToProps)(RowProductBasket);