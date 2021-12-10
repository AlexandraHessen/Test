import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import isoFetch from 'isomorphic-fetch';

import { plantsLoadingAC, countriesErrorAC, plantsSetAC } from "../redux/plantsAC";

class CountriesList extends React.PureComponent {

  static propTypes = {
    countries: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.dispatch( plantsLoadingAC() ); // переводим раздел countries стора в состояние "загружается"

    // isoFetch("http://fe.it-academy.by/Examples/net_city/countries.json")
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
            this.props.dispatch( plantsSetAC(data) ); // переводим раздел countries стора в состояние "ошибка"
        })
        .catch( (error) => {
            console.error(error);
            this.props.dispatch( countriesErrorAC() ); // переводим раздел countries стора в состояние "ошибка"
          })
    ;

  }

  render() {

    if ( this.props.countries.status<=1 )
      return "загрузка...";

    if ( this.props.countries.status===2 )
      return "ошибка загрузки данных";
      console.log(this.props.countries.data)
    return (
      
      <ul>
        {
          
          this.props.countries.data.map( (countryInfo,index) => <li key={countryInfo.id}>{countryInfo.name}</li> )
        }
      </ul>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(CountriesList);
