import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; // позволяет React компоненту подписаться на Redux 
import isoFetch from 'isomorphic-fetch';

import PreviewCardProduct from '../components/PreviewCardProduct';
import './CatalogPage.css'

import Catalog from '../components/Catalog';

import { plantsLoadingAC, plantsErrorAC, plantsSetAC } from "../redux/plantsAC"; //action type

class CatalogPage extends React.PureComponent {

  static propTypes = {
    plants: PropTypes.object.isRequired,  //redux массив с растениями
  };

  // componentDidMount() {
  //   this.props.dispatch( plantsLoadingAC() ); // переводим раздел plants стора в состояние "загружается"
  //   // значит this.props.dispatch( { type:"PLANTS_LOADING" } );
  //   // мы вызываем функцию из файла с экшенами (plantsAC) которая возвращает такой хэш
  //   //  {    type:"PLANTS_LOADING"}


  //   // отправляем AJAX запрос
  //   // isoFetch("http://fe.it-academy.by/Examples/net_city/plants.json")
  //   // https://jsonplaceholder.typicode.com/
  //   isoFetch("/plants.json")
  //   // isoFetch - работает с промисами
  //   // запросить json по ссылке
  //   // когда будет решен промис выполнить .then...
  //       .then( (response) => { // response - HTTP-ответ
  //           if (!response.ok) {
  //               let Err=new Error("fetch error " + response.status);
  //               Err.userMessage="Ошибка связи";
  //               throw Err;
  //           }
  //           else
  //           {
  //             console.log(response)
  //             // Response {type: 'basic', url: 'http://localhost:8080/plants.json', redirected: false, status: 200, ok: true, …}

  //             return response.json();
  //           }
               
  //       })
  //       .then( (data) => { //когда данные хорошо загружены
  //         console.log(data)
  //           this.props.dispatch( plantsSetAC(data) ); 
  //           // значит this.props.dispatch( { PLANTS_SET } );
  //           // мы вызываем функцию из файла с экшенами (plantsAC) которая возвращает такой хэш
  //           // {
  //           //   type: PLANTS_SET,
  //           //   plants:plants, //передаем загруженные данные
  //           // };
  //       })
  //       .catch( (error) => {
  //           console.error(error);
  //           this.props.dispatch( plantsErrorAC() ); // переводим раздел plants стора в состояние "ошибка"
  //         })
  //   ;

  // }


  componentDidMount= () => {
    if (!localStorage.plants){
      let sp1 = new URLSearchParams();
      sp1.append('f', 'READ');
      
      // sp1.append('n', 'YAKOVLEVA_PL');//"imgUrl": "../public/img/img_4294.jpg"
      // sp1.append('n', 'YAKOVLEVA_PLANT');//"imgUrl": "../img/img_9241_1.jpg"
      sp1.append('n', 'YAKOVLEVA_PLANTS_CATALOG');//"imgUrl": "/img/img_9241_1.jpg"
      // sp1.append('n', 'YAKOVLEVA_PLANTS_CATAL');//"imgUrl": "./img/img_9241_1.jpg" вообще не  работает
      isoFetch("http://fe.it-academy.by/AjaxStringStorage2.php", {
          method: 'POST',
          headers: {
              "Accept": "application/json",
          },
          body: sp1,
      })
       // отправляем AJAX запрос
    // isoFetch("http://fe.it-academy.by/Examples/net_city/plants.json")
    // https://jsonplaceholder.typicode.com/
    // isoFetch("/plants.json")
    // // isoFetch - работает с промисами
    // // запросить json по ссылке
    // // когда будет решен промис выполнить .then...
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
          console.log("data - "+ data)
            this.props.dispatch( plantsSetAC(JSON.parse(data.result)) ); 
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
    } else {
      this.props.dispatch( plantsLoadingAC() );
    }
    // this.props.dispatch( plantsLoadingAC() ); // переводим раздел plants стора в состояние "загружается"
    // значит this.props.dispatch( { type:"PLANTS_LOADING" } );
    // мы вызываем функцию из файла с экшенами (plantsAC) которая возвращает такой хэш
    //  {    type:"PLANTS_LOADING"}


   

  }

  render() {

    if ( this.props.plants.status<=1 )
      return "загрузка...";

    if ( this.props.plants.status===2 )
      return "ошибка загрузки данных";

      
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

   let plantsArr=this.props.plants.data;
console.log(plantsArr)
    return (
      // this.props.plants.data - массив с растениями
      // <ul>
      //   {
          
      //     this.props.plants.data.map( (countryInfo,index) => <li key={countryInfo.id}>{countryInfo.name}</li> )
      //   }
      // </ul>
      <Catalog plantsArr={plantsArr} pageNumber={this.props.match.params.pageNumber}> </Catalog>

    );

  }

}

const mapStateToProps = function (state) {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps)(CatalogPage);
// connect(mapStateToProps) - значит подписан на redux 