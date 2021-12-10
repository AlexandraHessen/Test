import React from 'react';

import MenuPages from '../pages/MenuPages';
import CategoryMenu from './CategoryMenu';
import Contacts from './Contacts'

import './Footer.css'

class Footer extends React.Component{
    // React.PureComponent
    render(){
        return(
            <footer className="Footer">
                <div>
                    <h3>Меню</h3>
                    <MenuPages />
                </div>
                <div>
                    <h3>Каталог</h3>
                    <CategoryMenu />
                </div>
                <div>
                    <h3>Контакты</h3>
                    <Contacts />
                </div>
            </footer>
        )
    }

}

export default Footer;