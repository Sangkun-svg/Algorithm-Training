/*function solution(ingredient,stepNumber = 4) {
    let result = 0;
    let joinedingredient = ingredient.join("");
    while(joinedingredient.includes("1231")){
        result++;
        joinedingredient = joinedingredient.replace("1231", "");
    }
    return result;
}*/

function solution(ingredients) {
    let result = 0;
    let stack = [];
    for(const ingredient of ingredients){
        stack.push(ingredient)
        const stackLength = stack.length;
        if(stack[stackLength - 4] === 1 &&
           stack[stackLength - 3] === 2 &&
           stack[stackLength - 2] === 3 &&
           stack[stackLength - 1] === 1 
          ){
            for(let i = 0; i < 4; i++){
                stack.pop();
            }
            result += 1;
        }
    }
    return result;
}