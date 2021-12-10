"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import "./PlantCard.css"
class PlantCard extends React.PureComponent{

    static propTypes ={
        info: PropTypes.shape({
            code: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
        }),
    }

    render(){
        return (
            <div className="PlantCard">
                <img src={this.props.info.imgUrl} className="PlantImg" />
                <p>{this.props.info.name}</p>
                <div>
                    <h4 className="Price">{this.props.info.price} руб.</h4>
                    <i className="fas fa-shopping-cart"></i> 
                    {/* <span>в корзину</span> */}
                </div>


            </div>
        )
    }
}

export default PlantCard