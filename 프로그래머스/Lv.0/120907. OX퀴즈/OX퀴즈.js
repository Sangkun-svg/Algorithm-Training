function solution(quiz) {
    return quiz.map(str => {
        const [q, a] = str.split(" = ");
        return eval(q) === Number(a) ? "O" : "X";
    })
}