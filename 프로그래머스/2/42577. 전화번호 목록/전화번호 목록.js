// function solution(phoneBook) {
//     const sortedArr = phoneBook.sort((a,b) => a.length - b.length)
//     for (let i = 0; i < sortedArr.length; i++) {
//         const min = sortedArr[i].length
//         for (let j = i+1; j < sortedArr.length; j++) {
//             if(sortedArr[i] === sortedArr[j].substr(0,min)){
//                 return false
//             }
//         }    
//     }
//     return true
// }

function solution(phoneBook) {
    return !phoneBook.sort().some((t,i)=> {
        if(i === phoneBook.length -1) return false;

        return phoneBook[i+1].startsWith(phoneBook[i]);        
    })
}