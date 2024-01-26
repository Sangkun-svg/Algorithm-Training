function solution(park, routes) {
    const [limitX, limitY] = [park[0].length - 1, park.length - 1];
    let currentY = park.findIndex(row => row.includes("S"));
    let currentX = park[currentY].indexOf("S");
    const splitedRoutes = routes.map(route => {
        const [direction, distance] = route.split(" ");
        return [direction, Number(distance)]
    });
    for(const [direction, distance] of splitedRoutes){
        if(direction === "E") {
            if(currentX + distance > limitX) continue;
            if(park[currentY].slice(currentX,currentX + distance + 1).includes("X")) continue;
            currentX += distance;
        }
        if(direction === "W"){
            if(currentX - distance < 0) continue;
            if(park[currentY].slice(currentX - distance,currentX + 1).includes("X")) continue;
            currentX -= distance;
        }
        if(direction === "S"){
            if(currentY + distance > limitY) continue;
            if(park.map((el,index) => el[currentX]).slice(currentY,currentY + distance + 1).includes("X")) continue;
            currentY += distance;
        }
        if(direction === "N"){
            if(currentY - distance < 0) continue;
            if(park.map((el, index) => el[currentX]).slice(currentY - distance, currentY + 1).includes("X")) continue;
            currentY -= distance;        
        }
    }
    return [currentY,currentX];
}
