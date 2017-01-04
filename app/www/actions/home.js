
export default function actionRouteToCountry(RouteToCountry) {
    console.log(11111)
    console.log(RouteToCountry)
    return {
        type: 'RouteToCountry',
        to: RouteToCountry
    }
}

