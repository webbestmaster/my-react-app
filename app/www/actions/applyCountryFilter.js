import actionConst from '../const';

export function applyCountryFilter(filter) {

    return {
        type: actionConst.TYPE.COUNTRY_FILTER,
        filter: filter
    };

}
