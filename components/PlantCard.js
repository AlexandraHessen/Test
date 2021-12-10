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
                <Navlink to={"/catalog/"+this.props.info.code} >
                    <img src={this.props.info.imgUrl} className="PlantImg" />
                </Navlink>
                <Navlink to={"/catalog/"+this.props.info.code} >
                    <p>{this.props.info.name}</p>
                </Navlink>
                <div>
                    <h4 className="Price">{this.props.info.price} руб.</h4>
                    <i className="fas fa-shopping-cart"></i> 
                </div>
            </div>
        )
    }
}

export default PlantCard