const PLANTS_LOADING='PLANTS_LOADING';
const PLANTS_ERROR='PLANTS_ERROR';
const PLANTS_SET='PLANTS_SET';

const plantsLoadingAC=function() {
  return {
    type: PLANTS_LOADING,
  };
}

const plantsErrorAC=function() {
  return {
    type: PLANTS_ERROR,
  };
}

const plantsSetAC=function(plants) {
  return {
    type: PLANTS_SET,
    plants:plants,
  };
}

export {
  plantsLoadingAC,PLANTS_LOADING,
  plantsErrorAC,PLANTS_ERROR,
  plantsSetAC,PLANTS_SET,
}
