function solution(s, skip, index) {
    const Alphabet = Array.from(
        {length: 26}, (_,i) => String.fromCharCode(97 + i))
        .filter(alphabet => !skip.includes(alphabet));;
    return s.split("").map(str => Alphabet[(Alphabet.indexOf(str) + index) % Alphabet.length]).join("")
}
