import actionConst from '../const';

export default function loadingImage(src) {

    return (dispatch) => {

        // dispatch(LOADING);

        let image = new Image();

        image.onload = image.onerror = () => {
            image.onload = image.onerror = null;
            dispatch({
                type: actionConst.TYPE.IMAGE_LOADED,
                src: src
            });

        };

        image.src = src;

    };

}
