import React from "react";
import PropTypes from 'prop-types';

import CountriesList from '../components/CountriesList';

class CatalogPage extends React.Component{
    render(){
        return(
            <div>
            <CountriesList />
            </div>

        )
    }
}
export default CatalogPage;

// import React from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import isoFetch from 'isomorphic-fetch';

// import { plantsLoadingAC, plantsErrorAC, plantsSetAC } from "../redux/plantsAC";

// class CountriesList extends React.PureComponent {

//   static propTypes = {
//     plants: PropTypes.object.isRequired,
//   };

//   componentDidMount() {
//     this.props.dispatch( plantsLoadingAC() ); // переводим раздел plants стора в состояние "загружается"

//     // isoFetch("http://fe.it-academy.by/Examples/net_city/plants.json")
//     // https://jsonplaceholder.typicode.com/
//     isoFetch("../plants.json")
//     // isoFetch - работает с промисами
//     // запросить json по ссылке
//     // когда будет решен промис выполнить .then...
//         .then( (response) => { // response - HTTP-ответ
//             if (!response.ok) {
//                 let Err=new Error("fetch error " + response.status);
//                 Err.userMessage="Ошибка связи";
//                 throw Err;
//             }
//             else
//                 return response.json();
//         })
//         .then( (data) => {
//             this.props.dispatch( plantsSetAC(data) ); // переводим раздел plants стора в состояние "ошибка"
//         })
//         .catch( (error) => {
//             console.error(error);
//             this.props.dispatch( plantsErrorAC() ); // переводим раздел plants стора в состояние "ошибка"
//           })
//     ;

//   }

//   render() {

//     if ( this.props.plants.status<=1 )
//       return "загрузка...";

//     if ( this.props.plants.status===2 )
//       return "ошибка загрузки данных";
//       console.log(this.props.plants.data)
//     return (
      
//       <ul>
//         {
          
//           this.props.plants.data.map( (countryInfo,index) => <li key={countryInfo.id}>{countryInfo.name}</li> )
//         }
//       </ul>
//     );

//   }

// }

// const mapStateToProps = function (state) {
//   return {
//     plants: state.plants,
//   };
// };

// export default connect(mapStateToProps)(CountriesList);
