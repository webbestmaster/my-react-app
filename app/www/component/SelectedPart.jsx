import React, {Component, PropTypes} from 'react';

export default class SelectedPart extends Component {

    render() {

        let props = this.props;
        let string = props.string;
        let re = props.re;

        if (!props.searchString) {
            return <span className="country-card__text">{string}</span>;
        }

        let firstSplit = string.search(re);
        if (firstSplit === -1) {
            return <span className="country-card__text">{string}</span>;
        }

        let secondSplit = firstSplit + string.match(re)[0].length;

        return <span className="country-card__text">
                    {string.substring(0, firstSplit)}
                    <span className="country-card__founded-text">
                        {string.substring(firstSplit, secondSplit)}
                    </span>
                    {string.substring(secondSplit)}
               </span>;


    }

}

SelectedPart.propTypes = {
    string: PropTypes.string.isRequired,
    searchString: PropTypes.string.isRequired,
    re: PropTypes.instanceOf(RegExp).isRequired
};
