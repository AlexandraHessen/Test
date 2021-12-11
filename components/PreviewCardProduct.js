"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import "./PreviewCardProduct.css"
class PreviewCardProduct extends React.PureComponent{

    static propTypes ={
        info: PropTypes.shape({
            code: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            imgUrl: PropTypes.string.isRequired,
        }),
        pageNumber:  PropTypes.number.isRequired
    }

    render(){
        
        return (
            <div className="PreviewCardProduct">
                <NavLink to={`/catalog/${this.props.pageNumber}/${this.props.info.code}`} >
                    <img src={this.props.info.imgUrl} className="PlantImg" />
                </NavLink>
                <NavLink to={`/catalog/${this.props.pageNumber}/${this.props.info.code}`} >
                    <p className="NameProduct">{this.props.info.name}</p>
                </NavLink>
                <div>
                    <h4 className="Price">{this.props.info.price} руб.</h4>
                    <button type="button" onClick = {this.addIntoCart} className="ButtonToBasket">
                        <NavLink to="/basket"><i className="fas fa-shopping-cart"></i></NavLink>
                </button>
                </div>
            </div>
        )
    }
}

export default PreviewCardProduct