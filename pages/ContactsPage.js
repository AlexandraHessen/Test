import React from 'react';

import './ContactsPage.css'
class ContactsPage extends React.Component{
    render(){
        return(
            <div className="ContactsPage">
                <h1>Контакты</h1>
                <h3>Наш адрес:</h3>
                <p>г.Минск, пр.Победителей, 65</p>
                <h3>Телефон:</h3>
                <p>+375 (29) 844-44-88</p>
                <p>+375 (44) 888-44-88</p>
                <h3>E-mail:</h3>
                <p>plants@gmail.com</p>
                <h3>Карта проезда:</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.3038246568763!2d27.515363315307575!3d53.92634593880996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc56e350faf59%3A0x8039bcd46f24618a!2z0L_RgC3Rgi4g0J_QvtCx0LXQtNC40YLQtdC70LXQuSA2NSwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1638823143292!5m2!1sru!2sby" width="800" height="450" frameBorder="0" allowFullScreen className="Map"></iframe>
            </div>
        )
    }
}

export default ContactsPage;