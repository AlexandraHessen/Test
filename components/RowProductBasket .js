import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

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

      render(){

        return(
            <tr className="RowProductBasket">
                <td><img src={this.props.info.imgUrl} className="Img"></img></td>
                <td>{this.props.info.name}</td>
                <td>{this.props.info.price}</td>
                <td></td>
                <td></td>
                <td><input type="button" value="del"/></td>

            </tr>
        )

        
      }
}

const mapStateToProps = function (state) {
    // этому компоненту ничего не нужно из хранилища Redux
    return { }; 
  };
  
  export default connect(mapStateToProps)(RowProductBasket);