import actionConst from '../const';

let doc = document;
let docElem = doc.documentElement;

const initialState = {
    width: docElem.clientWidth,
    height: docElem.clientHeight,
    isTouch: 'ontouchstart' in doc
};

export default function screen(state = initialState, action) {

    if (action.type !== actionConst.TYPE.RESIZE) {
        return state;
    }

    let width = docElem.clientWidth;
    let height = docElem.clientHeight;

    return {...state, width, height};

}
