function solution(n, arr1, arr2) {
    const result = [];
    const convertedArr1 = arr1.map(v => {
        if(v.toString(2).length === n){
            return v.toString(2)
        }else {
            return "0".repeat(n - v.toString(2).length) + v.toString(2)
        }
    })
    const convertedArr2 = arr2.map(v => {
        if(v.toString(2).length === n){
            return v.toString(2)
        }else {
            return "0".repeat(n - v.toString(2).length) + v.toString(2)
        }
    })
    for(let i = 0; i < n; i++){
        const tempArr = []
        for(let j = 0; j < n; j++){
           if(convertedArr1[i][j] === "1" || convertedArr2[i][j] === "1") {
               tempArr.push("1")
           }else {
               tempArr.push("0")
           }
        }
        result.push(tempArr.join("").replaceAll("1" , "#").replaceAll("0" , " "))
    }
    return result
    
}