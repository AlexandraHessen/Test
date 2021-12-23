import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import PreviewCardProduct from '../components/PreviewCardProduct';

import './Catalog.css'

class Catalog extends React.PureComponent{
    static propTypes={
        plantsArr: PropTypes.array.isRequired,
        pageNumber: PropTypes.string.isRequired,
        
    }

    // <li><NavLink to="/catalog/deciduous">Лиственные растения</NavLink></li>
    //             <li><NavLink to="/catalog/blooming">Цветущие растения</NavLink></li>
    //             <li><NavLink to="/catalog/succulents">Кактусы и суккуленты</NavLink></li>
    //             <li><NavLink to="/catalog/vines">Лианы</NavLink></li>
    //             <li><NavLink to="/catalog/fruit">Плодовые растения</NavLink></li>

    state ={
        countOfPlantsOnOnePage: 12,
        filterCategoryPlants: "all", // фильтрация клиентов all - все , deciduous - Лиственные, blooming - Цветущие, succulents - Кактусы
        filterPrice: "",
    }

    // componentDidMount = () => {
    //     this.scrollTop();
        
    // };

    allPlants=()=>{
        this.setState({filterCategoryPlants: "all"})
        this.props.history.push("/catalog/1")
    }
    deciduousPlants=()=>{
        this.setState({filterCategoryPlants: "deciduous"})
        this.props.history.push("/catalog/1")
    }
    bloomingPlants=()=>{
        this.setState({filterCategoryPlants: "blooming"})
        this.props.history.push("/catalog/1")
    }
    succulentsPlants=()=>{
        this.setState({filterCategoryPlants: "succulents"})
        this.props.history.push("/catalog/1")
    }

    scrollTop = () => {
        window.scrollTo(0, 0);
        // console.log('scroll')
    };

    showFilterPrice=(EO)=>{
        this.setState({filterPrice: this.newPriceRef.value})
    }

    newPriceRef = null;

    setPriceRef=(ref)=>{
        this.newPriceRef=ref
    }
    reset=()=>{
        this.setState({filterPrice: ""})
        this.newPriceRef.value=""

    }



    render(){
        console.log("Plants Catalog render")
        // console.log(this.props.plantsArr)
        let plantsArr=[...this.props.plantsArr];
        // let plantsArr=this.props.plantsArr.slice();

        // var plantsArrAfterFilter=plantsArr.filter((plant, i)=>{
        //     if (this.state.filterCategoryPlants === "all"){
        //         // this.props.history.push("/catalog/1")
        //         return plant
        //     }
        //     if(this.state.filterCategoryPlants === "deciduous" && plant.category === "deciduous"){
        //         // this.props.history.push("/catalog/1")
        //         return plant
        //     }
        //     if(this.state.filterCategoryPlants === "blooming" && plant.category === "blooming"){
        //         // this.props.history.push("/catalog/1")
        //         return plant
        //     }
        //     if(this.state.filterCategoryPlants === "succulents" && plant.category === "succulents"){
        //         // this.props.history.push("/catalog/1")
        //         return plant
        //     }
        // })


        var plantsArrAfterFilter
        if (this.state.filterPrice){
            plantsArrAfterFilter=plantsArr.filter((plant, i)=>{
        
                if (plant.price <= this.state.filterPrice ){
                    // this.props.history.push("/catalog/1")
                    return plant
                }
                // if(this.state.filterCategoryPlants === "deciduous" && plant.price === "deciduous"){
                //     // this.props.history.push("/catalog/1")
                //     return plant
                // }
                // if(this.state.filterCategoryPlants === "blooming" && plant.category === "blooming"){
                //     // this.props.history.push("/catalog/1")
                //     return plant
                // }
                // if(this.state.filterCategoryPlants === "succulents" && plant.category === "succulents"){
                //     // this.props.history.push("/catalog/1")
                //     return plant
                // }
            })
        } else {
            plantsArrAfterFilter=plantsArr
        }

        // var plantsArrAfterFilter=plantsArrAfterFilter=plantsArr.filter((plant, i)=>{
        
        //     if (plant.price <= this.state.filterPrice ){
        //         // this.props.history.push("/catalog/1")
        //         return plant
        //     }
        //     // if(this.state.filterCategoryPlants === "deciduous" && plant.price === "deciduous"){
        //     //     // this.props.history.push("/catalog/1")
        //     //     return plant
        //     // }
        //     // if(this.state.filterCategoryPlants === "blooming" && plant.category === "blooming"){
        //     //     // this.props.history.push("/catalog/1")
        //     //     return plant
        //     // }
        //     // if(this.state.filterCategoryPlants === "succulents" && plant.category === "succulents"){
        //     //     // this.props.history.push("/catalog/1")
        //     //     return plant
        //     // }
        // })
        // if (this.state.filterPrice){

        // } else {
        //     plantsArrAfterFilter=plantsArr
        // }


        
        
        let countOfAllPlants=plantsArrAfterFilter.length; //общее кол-во всех элементов 
        let pageLinksArr=[];
        let countOfAllPages=Math.ceil(countOfAllPlants/this.state.countOfPlantsOnOnePage); //общее кол-во  страниц
        for (let i=1; i<=countOfAllPages; i++){ //строим сами теги страниц
            pageLinksArr.push(<li key={i}><NavLink to={`/catalog/${i}`} key={i} className="PaginationLink" activeClassName="ActivePaginationLink">{i}</NavLink></li>)
        }

        let pageNumber=parseInt(this.props.pageNumber) //номер страницы

        let startIndex = (pageNumber-1) * this.state.countOfPlantsOnOnePage; // индекс первого элемента на странице (с какого?) номер страницы минус 1 * количество  элементов на странице
        let endIndex = startIndex + this.state.countOfPlantsOnOnePage //индекс последнего элемента на странице (по какой?) индекс первого товара на странице + кол-во товаров на странице

        let objsPlantOnOnePage = plantsArrAfterFilter.slice(startIndex, endIndex) // элементы на одной странице ( общее количество делим slice от и до НЕ ВКЛЮЧИТЕЛЬНО)

        let plantsArrCode=objsPlantOnOnePage.map( plant=> //все элементы которые отображаются на первой странице
            <PreviewCardProduct key={plant.code} info={plant} pageNumber={pageNumber}/>
            )
            console.log(plantsArrCode)
            // this.scrollTop();
        return(
        <div div className="Catalog">
            <div className="Filter">
                <div>
                    <label htmlFor="filterPrice" className="LabelFilterPrice">Цена до:</label>
                    {/* <input type="text" name="filterPrice" className="InputFilterPrice" onChange={this.filterPrice} ></input> */}
                    <input type="text" name="filterPrice" className="InputFilterPrice"  ref={this.setPriceRef} ></input>
                </div>
                <input type="button" value="Показать Результат" className="FilterButtons" onClick={this.showFilterPrice}/>
                <input type="button" value="Сброс" className="FilterButtons" onClick={this.reset}/>
                {/* <input type="button" value="Все" onClick={this.allPlants}/>
                <input type="button" value="Лиственные растения" onClick={this.deciduousPlants}/> 
                <input type="button" value="Цветущие растения" onClick={this.bloomingPlants}/>
                <input type="button" value="Кактусы и суккуленты" onClick={this.succulentsPlants}/> */}
            </div>
            
            <div>
                <div className="CatalogPage">
                    {plantsArrCode}
                </div>

                <ul className="Pagination">
                    { pageLinksArr}
                </ul>
            </div>

        </div>

        )

    }

}

export default withRouter(Catalog )