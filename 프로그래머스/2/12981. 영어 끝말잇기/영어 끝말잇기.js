function solution(n, words) {
    let result = [0,0];
    const stack = [];
    const store = {};
    const playerWords = Array.from({length: n}, (_) => []);
    for(const [idx, word] of words.entries()){
        const sequence = (idx + 1) % n || n;
        stack.push(word);
        if(!store[word]) {
            store[word] = true;
            playerWords[sequence - 1].push(word)
        }else {
            result = [sequence, playerWords[sequence - 1].length + 1];
            break;
        }
        if (idx > 0 && words[idx - 1].charAt(words[idx - 1].length - 1) !== word.charAt(0)) {
            result = [sequence, playerWords[sequence - 1].length];
            break;
        }
    }
    return result;
}