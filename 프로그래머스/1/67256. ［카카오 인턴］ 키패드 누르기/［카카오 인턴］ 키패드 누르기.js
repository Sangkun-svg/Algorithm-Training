function getBetween (middlePoint, point) {
    return Math.abs(middlePoint[0] - point[0]) + Math.abs(middlePoint[1] - point[1]);
};

function solution(numbers, hand, Left = [1,4,7], Right = [3,6,9] , Middle = [2,5,8,0]) {
    const result = [];
    const keyPad = [
        [ 1 ,2, 3 ],
        [ 4 ,5, 6 ],
        [ 7 ,8, 9 ],
        ["*",0,"#"]
    ];
    let leftPoint = [3,0];
    let rightPoint = [3,2];
    while(numbers.length > 0){
        const number = numbers.shift();
        if(Left.includes(number)) {
            leftPoint = [Left.indexOf(number), 0];
            result.push("L");
        }
        else if(Right.includes(number)) {
            rightPoint = [Right.indexOf(number), 2];
            result.push("R")
        }else {
            const middlePoint = [Middle.indexOf(number),1];
            let betweenLeft = getBetween(middlePoint, leftPoint);
            let betweenRight = getBetween(middlePoint, rightPoint);
            if(betweenLeft === betweenRight) {
                const isLeft = hand === "left";
                if(isLeft) leftPoint = middlePoint;
                else rightPoint = middlePoint
                result.push(isLeft ? "L" : "R");
            }
            else if(betweenLeft < betweenRight) {
                leftPoint = middlePoint
                result.push("L")
            }else {
                rightPoint = middlePoint
                result.push("R")
            }
        }
    }
    return result.join("")
}
