function $(selector, context) {
    return (context || document).querySelector(selector);
}

export function allowZoom(flag) {

    let metaNode = $('.js-viewport');

    if (flag) {
        metaNode.removeAttribute('name');
        metaNode.removeAttribute('content');
    } else {
        metaNode.setAttribute('name', 'viewport');
        metaNode.setAttribute('content', 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0');
    }

}
