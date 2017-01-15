import actionConst from '../const';

const initialState = {
    src: ''
};

const IMAGE_LOADED = actionConst.TYPE.IMAGE_LOADED;

export default function imageLoader(state = initialState, action) {

    if (action.type === IMAGE_LOADED) {
        return {...state, src: action.src};
    }

    return state;

}
