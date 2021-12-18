import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import PreviewCardProduct from '../components/PreviewCardProduct';

import './Catalog.css'

class Catalog extends React.PureComponent{
    static propTypes={
        plantsArr: PropTypes.array.isRequired,
        pageNumber: PropTypes.string.isRequired
    }

    state ={
        countOfPlantsOnOnePage: 12
    }

    // componentDidMount = () => {
    //     this.scrollTop();
        
    // };

    scrollTop = () => {
        window.scrollTo(0, 0);
        console.log('scroll')
    };

    render(){
        let plantsArr=this.props.plantsArr.slice();
        let countOfAllPlants=plantsArr.length; //общее кол-во всех элементов 
        let pageLinksArr=[];
        let countOfAllPages=Math.ceil(countOfAllPlants/this.state.countOfPlantsOnOnePage); //общее кол-во  страниц
        for (let i=1; i<=countOfAllPages; i++){ //строим сами теги страниц
            pageLinksArr.push(<li key={i}><NavLink to={`/catalog/${i}`} key={i} className="PaginationLink" activeClassName="ActivePaginationLink">{i}</NavLink></li>)
        }

        let pageNumber=parseInt(this.props.pageNumber) //номер страницы

        let startIndex = (pageNumber-1) * this.state.countOfPlantsOnOnePage; // индекс первого элемента на странице (с какого?) номер страницы минус 1 * количество  элементов на странице
        let endIndex = startIndex + this.state.countOfPlantsOnOnePage //индекс последнего элемента на странице (по какой?) индекс первого товара на странице + кол-во товаров на странице

        let objsPlantOnOnePage = plantsArr.slice(startIndex, endIndex) // элементы на одной странице ( общее количество делим slice от и до НЕ ВКЛЮЧИТЕЛЬНО)

        let plantsArrCode=objsPlantOnOnePage.map( plant=> //все элементы которые отображаются на первой странице
            <PreviewCardProduct key={plant.code} info={plant} pageNumber={pageNumber}/>
            )
            // this.scrollTop();
        return(
        <div>
            <div className="CatalogPage">
                {plantsArrCode}
            </div>

            <ul className="Pagination">
                { pageLinksArr}
            </ul>
        </div>

        )

    }

}

export default Catalog 