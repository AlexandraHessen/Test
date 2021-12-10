import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'; // позволяет React компоненту подписаться на Redux 


class PlantInfo extends React.PureComponent {

  static propTypes = {
    plants: PropTypes.object.isRequired,  //redux массив с растениями
  };

  render() {
    let plantId=parseInt(this.props.match.params.productId);
    let plantInfo=this.props.plants.find(plant=>plant.code==plantId);
    return(
        <div className="PlantCard">

            <img src={plantInfo.imgUrl} className="PlantImg" />
  

            <p>{plantInfo.name}</p>
 
        <div>
            <h4 className="Price">{plantInfo.price} руб.</h4>
            <i className="fas fa-shopping-cart"></i> 
        </div>
    </div>
    )

  }

}

const mapStateToProps = function (state) {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps)(PlantInfo);
// connect(mapStateToProps) - значит подписан на redux 