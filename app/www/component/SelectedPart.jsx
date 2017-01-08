import React, {Component} from 'react';

export default class SelectedPart extends Component {

    render() {

        let props = this.props;
        let string = props.string;
        let re = props.re;

        if (props.searchString) {
            let firstSplit = string.search(re);
            let secondSplit = firstSplit + string.match(re)[0].length;

            return <span>
                    {string.substring(0, firstSplit)}
                    <span className="country-card__founded-text">
                        {string.substring(firstSplit, secondSplit)}
                    </span>
                    {string.substring(secondSplit)}
               </span>;

        }

        return <span>{string}</span>;

    }

}
