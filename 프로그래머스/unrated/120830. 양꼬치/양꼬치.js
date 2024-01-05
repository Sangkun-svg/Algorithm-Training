function solution(n, k , n_price = 12000, k_price = 2000) {
    return n * n_price + (k - (Math.floor(n / 10))) * k_price
}