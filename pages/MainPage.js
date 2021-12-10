import React from 'react';
import { Provider } from 'react-redux'; //оборачиваем все приложение теги
import { createStore } from 'redux'; // создаем store и привязываем его к Reducer
import { BrowserRouter } from 'react-router-dom';

import combinedReducer from '../redux/reducers.js'; //combinedReducer файл со всеми Reducer
import CountriesList from '../components/CountriesList';

import Header from '../components/Header'
import CategoryMenu from '../components/CategoryMenu'
import RouterPages from './RouterPages'
import Footer from '../components/Footer'

import './MainPage.css'

let store=createStore(combinedReducer); // Redux создай store которым управляет этот reducer - combinedReducer(который в себе объединяет все reduserы)

class MainPage extends React.PureComponent {

  render() {
    return (
      <Provider store={store}>
                      {/* Provider - import { Provider } from 'react-redux'; 
                      всё свое приложения мы заварачиваем в tag Provider
                      тег Provider говорит, что для всего кода, который внутри будет работать Redux с хранилищем store
                      */}
        <BrowserRouter>
          <div className="MainPage">
            <Header />

            <main className="Main_Container">
              <div className="Nav_Section">
                <CategoryMenu />
              </div>
              <div className="Content">
                <RouterPages/>
                                          {/* <CountriesList /> */}
              </div>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default MainPage;
