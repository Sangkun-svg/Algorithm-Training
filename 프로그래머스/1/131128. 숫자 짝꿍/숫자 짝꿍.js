function solution(x,y) {
    let objX = {} , objY = {};
    const [splitedX, splitedY] = [x.split(""),y.split("")];
    splitedX.forEach((el) => objX[el] = (objX[el] || 0) + 1);
    splitedY.forEach((el) => objY[el] = (objY[el] || 0) + 1);
    const partners = Object.entries(objX).filter(([key]) => objY[key]); // focus on objX
    if(partners.length === 0) return "-1";
    const result = partners.map(([key]) => [key, Math.min(...[objX[key],objY[key]])])
        .sort((a,b) => b[0] - a[0]);
    if(result[0][0] === '0') return '0';
    return result.map(([key,val]) => key.repeat(val)).join("");
}