import actionConst from '../const';

let doc = document;
let docElem = doc.documentElement;

const initialState = {
    width: docElem.clientWidth,
    height: docElem.clientHeight,
    isTouch: 'ontouchstart' in doc
};

const RESIZE = actionConst.TYPE.RESIZE;

export default function screen(state = initialState, action) {

    if (action.type === RESIZE) {
        return {
            ...state,
            width: docElem.clientWidth,
            height: docElem.clientHeight
        };
    }

    return state;

}
