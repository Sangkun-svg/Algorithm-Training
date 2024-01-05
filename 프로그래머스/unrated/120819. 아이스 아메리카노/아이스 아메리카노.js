function solution(money, price = 5500) {
    return [Math.floor(money / price) , money % price]
}