import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import PlantCard from '../components/PlantCard';

class Catalog extends React.PureComponent{
    static propTypes={
        plantsArr: PropTypes.array.isRequired,
        // pageNumber: PropTypes.string.isRequired
    }

    state ={
        countOfPlantsOnOnePage: 20
    }

    render(){
        let plantsArr=this.props.plantsArr;
        let countOfAllPlants=plantsArr.length; //общее кол-во всех элементов 
        let pageLinksArr=[];
        let countOfAllPages=Math.ceil(countOfAllPlants/this.state.elemOnPage); //общее кол-во  страниц
        for (let i=1; i++; i<countOfAllPages){ //строим сами теги страниц
            pageLinksArr.push(<NavLink to={`/catalog/${i}`}>{i}</NavLink>)
        }

        let pageNumber=parseInt(this.props.pageNumber) //номер страницы

        let startIndex = (pageNumber-1) * this.state.countOfPlantsOnOnePage; // индекс первого элемента на странице (с какого?) номер страницы минус 1 * количество  элементов на странице
        let endIndex = startIndex + countOfPlantsOnOnePage //индекс последнего элемента на странице (по какой?) индекс первого товара на странице + кол-во товаров на странице

        let objsPlantOnOnePage = plantsArr.slice(startIndex, endIndex) // элементы на одной странице ( общее количество делим slice от и до НЕ ВКЛЮЧИТЕЛЬНО)


        // quantityPlantOnPage
        // objPlantOnOnePage 

        // какие элементы отображать на 1 странице 


        let plantsArrCode=this.props.plantsArr.map( plant=>
            <PlantCard key={plant.code} info={plant} />
            )

        return(
        <div>
            <div className="CatalogPage">
                {plantsArrCode}
            </div>

            {/* <div>
               { pageLinksArr}
            </div> */}
        </div>

        )

    }

}

export default Catalog 