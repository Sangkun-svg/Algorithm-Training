function solution(s, skip, index) {
    const Alphabet = Array.from({length: 26}, (_,i) => String.fromCharCode(97 + i));
    const formattedAlphabet = Alphabet.filter(alphabet => !skip.includes(alphabet));
    return s.split("").map(str => {
        const skipCount = formattedAlphabet.indexOf(str) + index;
        if(skipCount > formattedAlphabet.length - 1) 
            return formattedAlphabet[skipCount % formattedAlphabet.length];
        else return formattedAlphabet[skipCount];
    }).join("")
}
