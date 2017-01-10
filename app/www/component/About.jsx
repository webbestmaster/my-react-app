import React, {Component} from 'react';

export default class About extends Component {

    render() {
        return <div>

            <h1 className="country__header">О программе</h1>
            <div className="country__currency-info">
                <h2 className="country__header_2">Валютный справочник</h2>
                <p className="country__description">Программа содержит более 150 разных валют.</p>
                <p className="country__description">Пользуйтесь поиском что бы быстрее найти интересующую вас валюту.</p>
                <h2 className="country__header_2">Матералы</h2>
                <p className="country__description">Описание и изображения валют - FINANCE.UA (http://banknotes.finance.ua)</p>
                <p className="country__description">Изображения флагов государст - https://github.com/lipis/flag-icon-css</p>
                <h2 className="country__header_2">Контакты</h2>
                <p className="country__description">Сайт разработчика: https://statlex.github.io</p>
                <p className="country__description">E-mail: statlex.team@gmail.com</p>
            </div>

        </div>;
    }

}
