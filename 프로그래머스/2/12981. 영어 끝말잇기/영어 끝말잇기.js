function solution(n, words) {
    let result = [0, 0];
    const stack = [];
    const arr = Array.from({ length: n }, (_) => []);
    const map = new Map();

    words.forEach((word, idx) => {
        const currentPlayer = (idx + 1) % n || n;
        stack.push(word);

        if (!map.has(word)) {
            map.set(word, true);
            arr[currentPlayer - 1].push(word);
        } else {
            if (result[0] === 0 && result[1] === 0) {
                result = [currentPlayer, arr[currentPlayer - 1].length + 1];
            }
        }

        if (idx > 0 && words[idx - 1].charAt(words[idx - 1].length - 1) !== word.charAt(0)) {
            if (result[0] === 0 && result[1] === 0) {
                result = [currentPlayer, arr[currentPlayer - 1].length];
            }
        }
    });

    return result;
}
