import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'; // позволяет React компоненту подписаться на Redux 
import isoFetch from 'isomorphic-fetch';

import './CardProduct.css'

import { plantsLoadingAC, plantsErrorAC, plantsSetAC } from "../redux/plantsAC"; //action type

class CardProduct extends React.PureComponent {

  static propTypes = {
    plants: PropTypes.object.isRequired,  //передано из Redux  (массив с растениями)
  };

  // static propTypes = {
  //   info: PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       imgUrl: PropTypes.string.isRequired,
  //       name: PropTypes.string.isRequired,
  //       price: PropTypes.number.isRequired,
  //       category: PropTypes.string.isRequired,
  //       brand: PropTypes.string.isRequired,
  //       description: PropTypes.string.isRequired,
  //       qty: PropTypes.number.isRequired,
  //       sum: PropTypes.number.isRequired,
  //     }),
  // };

  // componentDidMount(){
  //   let plantArr=this.props.plants.data
  // }

  componentDidMount() {
    this.props.dispatch( plantsLoadingAC() ); // переводим раздел plants стора в состояние "загружается"
    // значит this.props.dispatch( { type:"PLANTS_LOADING" } );
    // мы вызываем функцию из файла с экшенами (plantsAC) которая возвращает такой хэш
    //  {    type:"PLANTS_LOADING"}


    // отправляем AJAX запрос
    // isoFetch("http://fe.it-academy.by/Examples/net_city/plants.json")
    // https://jsonplaceholder.typicode.com/
    isoFetch("/plants.json")
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
        .then( (data) => { //когда данные хорошо загружены
            this.props.dispatch( plantsSetAC(data) ); 
            // значит this.props.dispatch( { PLANTS_SET } );
            // мы вызываем функцию из файла с экшенами (plantsAC) которая возвращает такой хэш
            // {
            //   type: PLANTS_SET,
            //   plants:plants, //передаем загруженные данные
            // };
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

    let plantId=parseInt(this.props.match.params.productId);
      console.log(this.props.plants)
      // console.log(plantArr)
      let plantInfo=this.props.plants.data.find(plant=>plant.code==plantId);
      //  let CardProduct=this.props.plants.data.find(plant=>plant.code==plantId);
      return(
          <div className="CardProduct">
              <img src={plantInfo.imgUrl} className="PlantImg" />
              <div className="CardProduct">
                <h1 className="NameProduct">{plantInfo.name}</h1>
                <h4 className="Price">{plantInfo.price} руб.</h4>
                <NavLink to="/basket"><i className="fas fa-shopping-cart"></i></NavLink> 
                <h4>Описание:</h4>
                <p> {plantInfo.description}</p>
              </div>
      </div>
      )

      
      // this.props.match.params.category



    // let category=this.props.match.params.category;
    // let plantsArr=this.props.plants.data;
    // if (category){
    //   plantsArr=plantsArr.filter((plant)=>plant.category==category)
    // }
    // console.log(plantsArr)


    // let plantsArrCode=plantsArr.map( plant=>
    //   <PreviewCardProduct key={plant.code} info={plant} />
    // )

//    let plantsArr=this.props.plants.data;

//     return (
//       // this.props.plants.data - массив с растениями
//       // <ul>
//       //   {
          
//       //     this.props.plants.data.map( (countryInfo,index) => <li key={countryInfo.id}>{countryInfo.name}</li> )
//       //   }
//       // </ul>
//       <Catalog plantsArr={plantsArr} pageNumber={this.props.match.params.pageNumber}> </Catalog>

//     );

  }

}

const mapStateToProps = function (state) {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps)(CardProduct);
// connect(mapStateToProps) - значит подписан на redux 