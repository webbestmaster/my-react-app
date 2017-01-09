import actionConst from '../const';

export default function applyCountryFilter(filter) {

    return {
        type: actionConst.TYPE.COUNTRY_FILTER,
        filter: filter
    };

}
