function solution(num_list , evenSum = 0, oddSum = 0) {
    num_list.forEach((num , index) => index % 2 === 0 ? oddSum += num : evenSum += num);
    return oddSum > evenSum ? oddSum : evenSum;
}