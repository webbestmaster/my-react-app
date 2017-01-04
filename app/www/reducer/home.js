// import { INCREASE, DECREASE } from '../constants'

const initialState = {
    to: ''
};

export default function reducerRouteToCountry(state = initialState, action) {
    console.log(2222);
    console.log(action);

    if (action.type === 'RouteToCountry') {
        console.log(3333);
        console.log({to: '/' + action.to});
        return {to: '/' + action.to}
    }

    return state;

}
