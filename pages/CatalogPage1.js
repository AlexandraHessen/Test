import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';

import PlantCard from '../components/PlantCard';
import Catalog from '../components/Catalog'
import './CatalogPage.css'

import { plantsLoadingAC, plantsErrorAC, plantsSetAC } from "../redux/plantsAC";

class CatalogPage extends React.PureComponent {

  static propTypes = {
    plants: PropTypes.object.isRequired,  //redux массив с растениями
  };

  componentDidMount() {
    this.props.dispatch( plantsLoadingAC() ); // переводим раздел plants стора в состояние "загружается"

    // isoFetch("http://fe.it-academy.by/Examples/net_city/plants.json")
    // https://jsonplaceholder.typicode.com/
    isoFetch("../plants.json")
    // isoFetch - работает с промисами
    // запросить json по ссылке
    // когда будет решен промис выполнить .then...
        .then( (response) => { // response - HTTP-ответ
            if (!response.ok) {
                let Err=new Error("fetch error " + response.status);
                Err.userMessage="Ошибка связи";
                throw Err;
            }
            else
                return response.json();
        })
        .then( (data) => {
            this.props.dispatch( plantsSetAC(data) ); // переводим раздел plants стора в состояние "ошибка"
        })
        .catch( (error) => {
            console.error(error);
            this.props.dispatch( plantsErrorAC() ); // переводим раздел plants стора в состояние "ошибка"
          })
    ;

  }

  render() {

    if ( this.props.plants.status<=1 )
      return "загрузка...";

    if ( this.props.plants.status===2 )
      return "ошибка загрузки данных";

      
      // this.props.match.params.category


/*
    let category=this.props.match.params.category;
    let plantsArr=this.props.plants.data;
    if (category){
      plantsArr=plantsArr.filter((plant)=>plant.category==category)
    }
    console.log(plantsArr)


    let plantsArrCode=plantsArr.map( plant=>
      <PlantCard key={plant.code} info={plant} />
    )

*/

    return (
      // this.props.plants.data - массив с растениями
      // <ul>
      //   {
          
      //     this.props.plants.data.map( (countryInfo,index) => <li key={countryInfo.id}>{countryInfo.name}</li> )
      //   }
      // </ul>

      // <Catalog plantsArr={this.props.plants.data} category={this.props.match.params.category}></Catalog>
      // <Catalog plantsArr={this.props.plants.data} pageNumber={this.props.match.params.pageNumber}></Catalog>
      <Catalog plantsArr={this.props.plants.data}></Catalog>
      /*
      <div className="CatalogPage">
        {plantsArrCode}
      </div>
*/


    );

  }

}

const mapStateToProps = function (state) {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps)(CatalogPage);
