import React, {Component} from 'react';

export default class SelectedPart extends Component {

    render() {

        let string = this.props.string;
        let re = this.props.re;

        let firstSplit = string.search(re);
        let secondSplit = firstSplit + string.match(re)[0].length;

        let first = string.substring(0, firstSplit);
        let selected = string.substring(firstSplit, secondSplit);
        let second = string.substring(secondSplit);

        return <span>
            {first}
            {selected && <span className="country-card__founded-text">{selected}</span>}
            {second}
            </span>;

    }

}
