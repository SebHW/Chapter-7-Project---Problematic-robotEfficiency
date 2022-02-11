// Your code here

function bestRoute(object) {
    console.log(object)
    if (object["pickUp"]) {
        return (1 - object.route.length);
    }
    else {
        return (-object.route.length);
    }
}

function yourRobot({ place, parcels }, route) {
    //Mostly taken from the goalOrientedRobot used to get a complete list of routes
    if (route.length == 0) {
        //let parcel = parcels[0];
        //console.log(parcels)
        let routes = parcels.map(p => {
            if (p.place != place) {
                route = findRoute(roadGraph, place, p.place);
                return ({ route: route, pickUp: true })
            } else {
                route = findRoute(roadGraph, place, p.address);
                return ({ route: route, pickUp: false })
            }
        })
        //console.log(routes)
        //return Object.keys(parcels).reduce((previousState, currentState) =>{
        //  bestRoute(previousState) > bestRoute(currentState) ? previousState : currentState
        //})
        optimalRoute = routes.reduce((previous, current) => {
            bestRoute(previous) > bestRoute(current) ? previous : current
        }).route;

    }

    return { direction: optimalRoute[0], memory: optimalRoute.slice(1) };
}


runRobotAnimation(VillageState.random(), yourRobot, []);