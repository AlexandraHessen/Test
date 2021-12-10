import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from './MainPage';
import CatalogPage from './CatalogPage';
import ContactsPage from './ContactsPage';
import BasketPage from './BasketPage';

class RouterPages extends React.Component {
          
  render() {
    return (
      <div>
        <Route path="/" exact  />
        {/* component={MainPage} */}
        <Route path="/catalog"  component={CatalogPage} />
        {/* <Route path="/catalog/:pageNumber" exact component={CatalogPage} /> ПАГИНАЦИЯ */}
        {/* <Route path="/catalog/:category" exact component={CatalogPage} /> */}
        {/* Page_Client в props получит под именем param то что было в URL после /слеша
        т.е. например код клиента и отрендарит этого клиента */}
        {/* <Route path="/client/:clid" component={Page_Client} /> */}
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/basket" component={BasketPage} />
      </div>
    );
  }
}
    
export default RouterPages;