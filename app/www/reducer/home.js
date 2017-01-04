// import { INCREASE, DECREASE } from '../constants'

const initialState = {
    to: ''
};

export default function reducerRouteToCountry(state = initialState, action) {
    console.log(2222);
    console.log(action);

    if (action.type === 'RouteToCountry') {
        return {to: '/' + state.to, ...state}
    }

    return state;

}
