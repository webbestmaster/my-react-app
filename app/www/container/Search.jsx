import React, {Component} from 'react';
import {connect} from 'react-redux';

import {applyCountryFilter} from './../actions/';

class Search extends Component {

    onSearchChange(e) {
        this.props.applyCountryFilter(e.currentTarget.value);
    }

    render() {
        return <input className="home-cards__search-input" type="text" placeholder="Поиск..." value={this.props.countrySearch.filter || ''} onChange={e => this.onSearchChange(e)}/>;
    }

}

export default connect(
    state => ({countrySearch: state.countrySearch}),
    {applyCountryFilter}
)(Search);
